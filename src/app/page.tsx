'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 pt-2 pb-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl w-full"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="name-outline">John Abed</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
        >
          Welcome to my 100% vibe coded website
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl max-w-2xl mx-auto border border-gray-800"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Go Johnny Go!
              </h2>
              <a
                href="/gojohnnygo/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00ffcd] to-[#faff70] hover:from-[#faff70] hover:to-[#47cfff] text-gray-900 transition-all duration-300 py-2 px-4 rounded-lg font-semibold text-base shadow-lg hover:shadow-[#00ffcd]/25 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00ffcd] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <SportsEsportsIcon className="shake-icon transition-transform duration-300" />
                Play Now
              </a>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Join Johnny B Goode on his adventure to recover the pieces of his 1914 Gibson L-1 Acoustic guitar that was stolen by Beelzebub
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden mx-4 sm:mx-6 shadow-xl ring-1 ring-gray-700">
            <Image
              src="/gojohnnygo.gif"
              alt="Go Johnny Go Gameplay"
              width={800}
              height={450}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="mx-4 sm:mx-6 py-4 sm:py-6"></div>
        </motion.div>
      </motion.div>
    </div>
  );
} 