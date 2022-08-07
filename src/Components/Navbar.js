import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {items} from './NavItems';
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;

export default function Navbar() {

  const navigate = useNavigate()

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: "white"
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {items.map((text, index) => (
            <ListItem 
                button
                key = {text.id} 
                onClick = {() => navigate(text.route)}
            >
                <ListItemIcon sx={{color: "white"}}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}
