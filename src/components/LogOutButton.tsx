import { Link } from "react-router-dom";
import { LogoutFetch } from "../services/authService";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

interface LogOutButtonProps {
  isAdmin?: boolean;
}

const LogOutButton: React.FC<LogOutButtonProps> = ({ isAdmin }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleClick = async () => {
    try {
      await LogoutFetch();
      dispatch(logout());
      console.log("Logged out successfully");
    } catch (error : any) {
      console.error("Failed to log out:", error.message);
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <KeyboardArrowDownIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleClick}>Se déconnecter</MenuItem>
            {isAdmin && <MenuItem component={Link} to="/admin/page">Admin Page</MenuItem>}
          </Menu>
        </>
      ) : (
        <Button
          variant="outlined"
          onClick={handleClick}
          sx={{
            marginTop: -5,
            marginRight: 20,
            bgcolor: "#FFFFFF",
            color: "#000000",
            "&:hover": {
              bgcolor: "#E5E5E5",
            },
          }}
        >
          <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
            Se déconnecter
          </Link>
        </Button>
      )}
    </>
  );
};

export default LogOutButton;
