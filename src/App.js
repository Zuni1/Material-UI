import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import {Outlet} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Main from './Components/NavComponents/Main';
import {useLocation} from 'react-router-dom'

function App() {

  const [title, setTitle] = React.useState(null);
  const location = useLocation();
  
  React.useEffect(() => {
    const ttl = location.pathname.replace(/\W/g, ' ');
    setTitle(ttl);
  }, [location]);

  return (
    <Grid container>
      <Navbar />
      <Main title={title} style={{backgroundColor: '#eaeff1'}}/>
      <Outlet/>
    </Grid>
  );
}

export default App;
