import { useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  InputAdornment,
  Typography,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginBackground from '../assets/images/LoginBackground.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { login } from "../features/authSlice";
import { LoginFetch } from "../services/authService";
import Cookies from "js-cookie";

interface User {
  admin: boolean | null;

}

interface LoginResponseData {
  user: User;
  message: string;
}

interface LoginResponse {
  data: LoginResponseData;
  headers: {
    authorization: string;
  };
}

function LoginPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleVisibility = (): void => {
    setVisibility(!visibility);
  }

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';
  
    try {
      const response: LoginResponse = await LoginFetch(email, password);
      const { data, headers } = response;
      const user = data.user;
      const token = headers.authorization;
  
      Cookies.set("token", token);
      Cookies.set("useradmin", user.admin?.toString() ?? '');
  
      if (user.admin == true) {
        window.location.href = "/admin/page";
      } else {
        window.location.href = "/products";
      }
      setError(null);
      dispatch(login({ token, isAdmin: !!user.admin }));
    } catch (error: any) {
      console.error("Failed to login:", error.message);
      setError("Adresse e-mail ou mot de passe incorrect.");
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LoginBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          {error !== null && <Alert severity="error">{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              inputRef={emailRef}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={visibility ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              inputRef={passwordRef}
              InputProps={{
                endAdornment: visibility ? 
                  <InputAdornment position="end"><VisibilityIcon onClick={handleVisibility} /></InputAdornment> 
                  : 
                  <InputAdornment position="end"><VisibilityOffIcon onClick={handleVisibility} /></InputAdornment>
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  Pas encore inscrit ?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
