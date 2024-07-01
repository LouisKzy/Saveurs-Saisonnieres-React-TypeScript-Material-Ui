import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,

  Stack,
  useMediaQuery,
  useTheme,
  Drawer, 
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MenuIcon from "@mui/icons-material/Menu";
import LogoFull from '../assets/images/LogoHome.png';
import { LogoutFetch } from "../services/authService";
import { logout } from "../features/authSlice";
import { useDispatch } from "react-redux";
// import "./NavBar.css";

function NavBar() {
  const { token, isAdmin } = useSelector((state: any) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);


  const belowMd = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };
  const handleClick = async () => {
    try {
      await LogoutFetch();
      dispatch(logout());
      console.log("Logged out successfully");
    } catch (error : any) {
      console.error("Failed to log out:", error.message);
    }
  };
  const buttonSx = {

    color: "white",
    "&:hover": { color: "white", flexGrow: 1 },
  }
  const menuItems = (
    <List 
      sx={{
          backgroundColor: theme.palette.primary.main, 
          height: "100vh", 
          justifyContent: "start", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          textAlign: "center",
        }} 
    >  
      <ListItem  component={Link} to="/products" onClick={toggleDrawer(false)}>
        <ListItemText  primary=" Produits" />
      </ListItem>
      <ListItem sx={{color: "white"}} component={Link} to="/legumes" onClick={toggleDrawer(false)}>
        <ListItemText primary="Légumes" />
      </ListItem>
      <ListItem sx={{color: "white"}} component={Link} to="/fruits" onClick={toggleDrawer(false)}>
        <ListItemText primary="Fruits" />
      </ListItem>
      <ListItem sx={{color: "white"}} component={Link} to="/paniers" onClick={toggleDrawer(false)}>
        <ListItemText primary="Paniers" />
      </ListItem>
      { token ? (
        <List sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          
          <IconButton sx={{color: "white", backgroundColor: theme.palette.error.main}} onClick={handleClick}>
            <LogoutIcon  />
          </IconButton>

          <ListItem>
            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCartIcon sx={{color: "white"}} />
            </IconButton>
          </ListItem>
          <ListItem>
            <IconButton
              color="inherit"
              component={Link}
              to={isAdmin ? "/admin/page" : "/profil"}

            >
              <AccountCircleIcon sx={{color: "white"}} />
            </IconButton>
          </ListItem>
        </List>
        ) : (
          <ListItem sx={{color: "white"}} component={Link} to="/login" onClick={toggleDrawer(false)}>
            <ListItemText primary="Connexion" />
          </ListItem>
        )
      }
      
    </List>
  );
  
  return (
    <AppBar sx={{ backgroundColor: theme.palette.primary.main, minHeight: "90px", minWidth: "100vw" }} position="static" className={`navbar`}  > 
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" >
          <Link to="/">
          <img
            src={LogoFull}
            alt="Logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%", 
              margin: "5px"
            }}
          />
          </Link>
        </Stack>
        {belowMd ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              ModalProps={{ keepMounted: true }}
            >
              {menuItems}
            </Drawer>
          </>
        ) : (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button size="small" sx={buttonSx} component={Link} to="/products" >
              Produits
            </Button>
            <Button size="small" sx={buttonSx} component={Link} to="/legumes" color="inherit">
              Légumes
            </Button>
            <Button size="small" sx={buttonSx} component={Link} to="/fruits" color="inherit">
              Fruits
            </Button>
            <Button size="small" sx={buttonSx} component={Link} to="/paniers" color="inherit">
              Paniers
            </Button>

            {token ? (
              <>
                <IconButton color="inherit" component={Link} to="/cart">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  component={Link}
                  to={isAdmin ? "/admin/page" : "/profil"}
                >
                  <AccountCircleIcon />
                </IconButton>
                <Button
                  variant="outlined"
                  onClick={handleClick}
                  sx={{
                    color: "white",
                    backgroundColor: theme.palette.error.main,
                    borderColor: theme.palette.error.main,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: theme.palette.error.light
                    },
                    

                  }}
                >
                  <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                    Se déconnecter
                  </Link>
                </Button>
              </>
            ) : (
              <Button size="small" sx={buttonSx} component={Link} to="/login" color="inherit">
                Connexion
              </Button>
            )
          }
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
