import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import { Description, Home, Group, Storefront, Person, Settings, AccountBox, DarkMode } from '@mui/icons-material';

export const Sidebar = ({mode, setMode}) => {
  return (
    <Box flex={1} p={2} sx={{display: {xs:"none", sm: "block"} }}>
      <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home/> 
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#pages'>
              <ListItemIcon>
                <Description/> 
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#group'>
              <ListItemIcon>
                <Group/> 
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Storefront'>
              <ListItemIcon>
                <Storefront/> 
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Person'>
              <ListItemIcon>
                <Person/> 
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Settings'>
              <ListItemIcon>
                <Settings/> 
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#AccountBox'>
              <ListItemIcon>
                <AccountBox/> 
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#DarkMode'>
              <ListItemIcon>
                <DarkMode/> 
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
    </Box>
  )
}
