import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import VaccinesIcon from '@mui/icons-material/Vaccines';

import { SideBarTree, SideBarList } from './SideBarItems';

import ComboBox from './ComboBox';
import SearchBar from './SearchBar';
import Tree from './Tree';

const drawerWidth = 360;

export default function ClippedDrawer(props) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={(props.open)? props.handleDrawerClose: props.handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
              size="large"
              aria-label="account of current user"
              color="inherit"
            >
              <VaccinesIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Clinical Trial Hub
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        anchor="left"
        open={props.open}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', p: 2 }}>
          <List component="nav">
            {SideBarTree}
          </List>
          {props.renderTree ? <Tree meshpaths={props.meshpaths}/> : null}
          <Divider />
          <List component="nav">
            {SideBarList}
          </List>
        </Box>
      </Drawer>
      
    </Box>
  );
}