import React, { useState, useRef, useEffect, useInsertionEffect } from 'react';
import { useParams } from "react-router";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ClippedDrawer from './ClippedDrawer';

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


export default function TrialPage() {
  const [draweropen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  let { TrialId } = useParams();

  const [Condition, setCondition] = useState(null);
  const [LocationCountries, setLocationCountries] = useState([]);
  const [MeshPaths, setMeshPaths] = useState([]);
  const [Summary, setSummary] = useState(null);
  const [Title, setTitle] = useState(null);

  useEffect(() => {
    fetch('https://zbpgf4kzrk.execute-api.us-east-1.amazonaws.com/dev/' + TrialId)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setCondition(data.Condition);
        setLocationCountries(data.LocationCountries);
        setMeshPaths(data.MeshPaths);
        setSummary(data.Summary);
        setTitle(data.Title);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      })
  })

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ClippedDrawer open={draweropen} handleDrawerClose={handleDrawerClose} handleDrawerOpen={handleDrawerOpen} meshpaths={MeshPaths} renderTree={true} />
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
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <div>{TrialId}</div>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <div>Title: {Title}</div>
                    <div>Summary: {Summary}</div>
                    <div>Condition: {Condition}</div>
                </Paper>
              </Grid>
            </Grid>
        </Container>
      </Main>
    </Box>
  );
}