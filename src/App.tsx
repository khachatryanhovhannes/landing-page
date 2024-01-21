import { Grid, IconButton } from '@mui/material';
import LeftNavbar from './components/navbar';
import Home from './pages/home';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';


const App = () => {

  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth <= 900) {
      setShowNavbar(false)
    }
    else{
      setShowNavbar(true)
    }
  }, [])


  const hanleNavbarOpen = () => {
    setShowNavbar(true)
  }

  const handleNavbarClose = () => {
    setShowNavbar(false)
  }


  return (
    <Grid container spacing={0} justifyContent="space-between" >
      <Grid item xs={12} sm={3} md={2} lg={2} onClick={(e) => { e.stopPropagation }}>
        {showNavbar ?
          <LeftNavbar handleNavbarClose={handleNavbarClose} showNavbar={showNavbar} /> :
          <IconButton
            onClick={hanleNavbarOpen}
            size="large"
            edge="start"
            aria-label="menu"
            style={{
              minWidth: "100vw",
              color: 'white',
              position: "fixed",
              padding: "10px",
              background: "black",
              borderRadius: "0",
              zIndex: 10
            }}
          >
            <MenuIcon
            />
          </IconButton>
        }
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={9} onClick={handleNavbarClose} justifyContent="right">
        <Home />
      </Grid>
    </Grid>
  );
};

export default App;
