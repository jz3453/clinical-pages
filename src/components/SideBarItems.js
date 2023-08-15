import * as React from 'react';
import ForestRoundedIcon from '@mui/icons-material/ForestRounded';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SideBarTree = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      <ListItemIcon>
        <ForestRoundedIcon />
      </ListItemIcon>
    </ListSubheader>
  </React.Fragment>
);

export const SideBarList = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Filters
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Filter 1" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Filter 2" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Filter 3" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Filter 4" />
    </ListItemButton>
  </React.Fragment>
);