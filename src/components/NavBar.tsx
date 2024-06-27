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
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogOutButton from "./LogOutButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoFull from '../assets/images/LogoHome.png';
// import "./NavBar.css";

function NavBar() {
  const { token, isAdmin } = useSelector((state: any) => state.auth);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const buttonSx = {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    "&:hover": { backgroundColor: theme.palette.secondary.light, color: "white", flexGrow: 1 },
  }
  const menuItems = (
    <List sx={{backgroundColor: theme.palette.primary.main, height: "100%"}} color='inherit' >  
      <ListItem sx={{color: "white"}} component={Link} to="/products" onClick={toggleDrawer(false)}>
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
    </List>
  );

  return (
    <AppBar position="static" className={`navbar`} sx={{ minHeight: "90px" }}  > 
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" >
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
            {token && (
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
                <LogOutButton />
              </>
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
