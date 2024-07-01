import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Typography from '@mui/material/Typography';
import Fonregister from '../assets/images/Fonregister.jpg';
import { RegisterFetch } from '../services/authService';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function RegisterPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [visibility , setVisibility] = useState<boolean>(false)
  const [visibility2 , setVisibility2] = useState<boolean>(false)
  const handleVisibility = () => {
    setVisibility(!visibility)
  }
  const handleVisibility2 = () => {
    setVisibility2(!visibility2)
  }
  const navigate = useNavigate();
  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault();
  
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';
    const confirmPassword = confirmPasswordRef.current?.value ?? '';

  
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  
    try {
      const data = await RegisterFetch(email, password);
      console.log(data);
      navigate('/login');
    } catch (error: any) {
      alert('Failed to register: ' + error.message);
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
          backgroundImage: `url(${Fonregister})`,
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
            <AppRegistrationIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Inscription
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              inputRef={emailRef}
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type={visibility ? "text" : "password"}
              name="password"
              label="Password"

              id="password"
              inputRef={passwordRef}
              autoComplete="new-password"
              InputProps={{
                endAdornment: visibility ? 
                  <InputAdornment position="end"><VisibilityIcon onClick={handleVisibility} /></InputAdornment> 
                  : 
                  <InputAdornment position="end"><VisibilityOffIcon onClick={handleVisibility} /></InputAdornment>
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password-confirmation"
              label="Confirmez le mot de passe"
              type={visibility2 ? "text" : "password"}
              id="password-confirmation"
              inputRef={confirmPasswordRef}
              autoComplete="current-password"
              InputProps={{
                endAdornment: visibility2 ? 
                  <InputAdornment position="end"><VisibilityIcon onClick={handleVisibility2} /></InputAdornment> 
                  : 
                  <InputAdornment position="end"><VisibilityOffIcon onClick={handleVisibility2} /></InputAdornment>
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="J'ai lu et j'accepte les conditions d'utilisation"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              S'inscrire
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Déja inscrit ? Se connecter
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default RegisterPage