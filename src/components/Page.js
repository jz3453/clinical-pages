import React, { useState, useRef, useEffect, useInsertionEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import ClippedDrawer from './ClippedDrawer';
import TrialsList from './TrialsList';

const drawerWidth = 360;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


export default function Page() {
  const [draweropen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const [Trials, setTrials] = useState([]);


  useEffect(() => {
    fetch('https://zbpgf4kzrk.execute-api.us-east-1.amazonaws.com/dev/' + "Home")
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log(data);
        setTrials(data.Trials);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ClippedDrawer open={draweropen} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} renderTree={false}/>
      <Main 
        open={draweropen}
        sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}>
            <Toolbar/>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 4, display: 'flex', flexDirection: 'column' }}>
                    <TrialsList list={Trials} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
      </Main>
    </Box>
  );
}