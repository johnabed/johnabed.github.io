import React from 'react'
import './App.css'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from '@mui/material'
import {
  Email,
  LinkedIn,
  GitHub,
  Facebook,
  Instagram,
  SportsEsports,
} from '@mui/icons-material'

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
    >
      <Card className="card" variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              alt="John Abed"
              src="images/johnabed.jpeg"
              sx={{width: 48, height: 48}}
            />
          }
          title={
            <Typography variant="h3" component="h1" className="header">
              John Abed
            </Typography>
          }
        />
        <CardContent>
          <List subheader={<ListSubheader component="div">Connect</ListSubheader>}>
            <ListItem
              button
              component="a"
              href="mailto:jabed.hba2019@ivey.ca"
              target="_blank"
              rel="noreferrer"
            >
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://www.linkedin.com/in/johnabed/"
              target="_blank"
              rel="noreferrer"
            >
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://github.com/johnabed"
              target="_blank"
              rel="noreferrer"
            >
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://www.facebook.com/johnaabed"
              target="_blank"
              rel="noreferrer"
            >
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListItemText primary="Facebook" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://www.instagram.com/johnabed/"
              target="_blank"
              rel="noreferrer"
            >
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="Instagram" />
            </ListItem>
          </List>
          <Divider />
          <List subheader={<ListSubheader component="div">Play</ListSubheader>}>
            <ListItem button component="a" href="gojohnnygo/" target="_blank">
              <ListItemIcon>
                <SportsEsports />
              </ListItemIcon>
              <ListItemText primary="Go Johnny Go!" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  )
}

export default App
