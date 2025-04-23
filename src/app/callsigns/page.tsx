'use client';

import { callsigns, TCallsignRecord } from './callsigns';
import Image from 'next/image';
import {
  Tooltip,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  IconButton,
  Collapse,
} from '@mui/material';
import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import styles from './page.module.css';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

// Function to normalize text by removing diacritics
const normalizeText = (text: string): string => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

type ViewMode = 'grid' | 'grouped';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(20);
  const [columnsCount, setColumnsCount] = useState(20);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({});
  const gridRef = useRef<HTMLDivElement>(null);

  // Debounce the search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(inputValue.toLowerCase());
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  // Memoize filtered callsigns
  const filteredCallsigns = useMemo(() => {
    if (!searchQuery) return callsigns;

    return callsigns.filter(callsign =>
      normalizeText(callsign.callsign.toLowerCase()).includes(normalizeText(searchQuery))
    );
  }, [searchQuery]);

  // Group callsigns by assigned date
  const groupedCallsigns = useMemo(() => {
    const groups: Record<string, typeof callsigns> = {};

    filteredCallsigns.forEach(callsign => {
      if (!groups[callsign.assignedDate]) {
        groups[callsign.assignedDate] = [];
      }
      groups[callsign.assignedDate].push(callsign);
    });

    // Sort dates chronologically
    return Object.entries(groups)
      .sort(([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime())
      .map(([date, callsigns]) => ({ date, callsigns }));
  }, [filteredCallsigns]);

  // Handle clicks outside the grid
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gridRef.current && !gridRef.current.contains(event.target as Node)) {
        setExpandedIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    const value = newValue as number;
    setSliderValue(value);
    setColumnsCount(value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCallsignClick = (callsign: TCallsignRecord) => {
    const index = filteredCallsigns.findIndex(c => c.callsign === callsign.callsign);
    setExpandedIndex(index);
  };

  const handleViewModeChange = (_event: React.MouseEvent<HTMLElement>, newViewMode: ViewMode) => {
    if (newViewMode !== null) {
      setViewMode(newViewMode);
    }
  };

  const handleGroupToggle = (date: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  const handleExpandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    groupedCallsigns.forEach(({ date }) => {
      allExpanded[date] = true;
    });
    setExpandedGroups(allExpanded);
  };

  const handleCollapseAll = () => {
    setExpandedGroups({});
  };

  const renderCallsignGrid = (callsigns: typeof filteredCallsigns) => (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columnsCount}, 1fr)`,
        transition: 'grid-template-columns 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {callsigns.map((callsign, index) => (
        <Tooltip key={index} title={callsign.callsign} arrow placement="top">
          <div className={styles.gridItem} onClick={() => handleCallsignClick(callsign)}>
            <div className={styles.imageWrapper}>
              <Image
                src={`/callsigns/${callsign.callsign}.png`}
                alt={callsign.callsign}
                width={24}
                height={24}
                className={styles.callsignImage}
                priority={index < columnsCount * 2}
              />
            </div>
          </div>
        </Tooltip>
      ))}
    </div>
  );

  return (
    <main className={styles.main}>
      <div className={styles.controls}>
        <div className={styles.controlsRow}>
          <div className={styles.sliderContainer}>
            <span className={styles.sliderLabel}>Callsigns per row: {sliderValue}</span>
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              min={10}
              max={50}
              step={1}
              valueLabelDisplay="auto"
              aria-label="Number of callsigns per row"
            />
          </div>
          <TextField
            className={styles.searchInput}
            label="Search callsigns"
            variant="outlined"
            value={inputValue}
            onChange={handleSearchChange}
            size="small"
          />
          <ToggleButtonGroup
            value={viewMode}
            exclusive
            onChange={handleViewModeChange}
            aria-label="view mode"
          >
            <ToggleButton value="grid" aria-label="grid view">
              Grid
            </ToggleButton>
            <ToggleButton value="grouped" aria-label="grouped view">
              Grouped
            </ToggleButton>
          </ToggleButtonGroup>
          {viewMode === 'grouped' && (
            <div className={styles.groupControls}>
              <Button onClick={handleExpandAll} size="small">
                Expand All
              </Button>
              <Button onClick={handleCollapseAll} size="small">
                Collapse All
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className={styles.gridContainer} ref={gridRef}>
        {viewMode === 'grid' ? (
          renderCallsignGrid(filteredCallsigns)
        ) : (
          <div className={styles.groupedView}>
            {groupedCallsigns.map(({ date, callsigns }) => (
              <div key={date} className={styles.dateGroup}>
                <div className={styles.dateHeader} onClick={() => handleGroupToggle(date)}>
                  <h2>{date}</h2>
                  <IconButton size="small">
                    {expandedGroups[date] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </div>
                <Collapse in={expandedGroups[date]}>{renderCallsignGrid(callsigns)}</Collapse>
              </div>
            ))}
          </div>
        )}
      </div>
      {expandedIndex !== null && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.card}>
              <div className={styles.cardImageContainer}>
                <Image
                  src={`/callsigns/${filteredCallsigns[expandedIndex].callsign}.png`}
                  alt={filteredCallsigns[expandedIndex].callsign}
                  width={120}
                  height={120}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardDetails}>
                <h2 className={styles.callsignName}>{filteredCallsigns[expandedIndex].callsign}</h2>
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Assigned:</span>
                  <span className={styles.detailValue}>
                    {filteredCallsigns[expandedIndex].assignedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
