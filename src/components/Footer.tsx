import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, Grid, useMediaQuery, useTheme, Link, Divider } from '@mui/material';
import { setTheme, selectTheme } from '../features/authSlice';
import CustomTheme from '../assets/styles/CustomTheme';
import ToggleColorMode from './ToggleColorMode';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  const dispatch = useDispatch();
  const themeSelector = useSelector(selectTheme);
  const themeOptions = CustomTheme(themeSelector);
  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down('md'));

  const handleThemeChange = () => {
    const newTheme = themeSelector === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <Box
      bgcolor={themeOptions.palette?.primary?.main}
      component="footer"
      sx={{
        minHeight: '12vh',
        alignContent: 'center',
        p: 2,
      }}
    >
      <Grid
        container
        justifyContent='center'
        alignItems="center"
        textAlign="center"
      >
        {belowMd && (
          <>
            <Grid item xs={6} >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.95 }}>
                <Typography variant="body1" sx={{ fontSize: 'small' }}><Link sx={{ color: 'white' }} href="/legal-notice">Mentions légales</Link></Typography>
                <Typography variant="body1" sx={{ fontSize: 'small' }}><Link sx={{ color: 'white' }} href="/cgu-cgv">CGU / CGV</Link></Typography>
                <Typography variant="body1" sx={{ fontSize: 'small' }}><Link sx={{ color: 'white' }} href="/privacy-policy">Politique de confidentialité</Link></Typography>
              </Box>
            </Grid>

            <Grid item xs={6} >
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <InstagramIcon sx={{ color: 'white' }} />
                  <FacebookIcon sx={{ color: 'white' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ToggleColorMode handleThemeChange={handleThemeChange} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ margin: '10px 0', height: '3px' }} />
            </Grid>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center',  flexDirection: 'row' }} >
                <PhoneIcon sx={{  marginRight: 1 }}  />
                <Typography sx={{ fontSize: 'small' }} variant="body1">04 12 34 56 78</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <LocationOnIcon sx={{ marginRight: 1 }} />
                <Typography sx={{ fontSize: 'small' }} variant="body1">14, rue des étoiles, 34000 Montpellier</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <EmailIcon sx={{ marginRight: 1 }} />
                <Typography variant="body1">local@saveursaison.com</Typography>
              </Box>

            </Box>
          </>
        )}
        {!belowMd && (
          <>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
              <Typography variant="body1"><Link sx={{ color: 'white' }} href="/legal-notice">Mentions légales</Link></Typography>
              <Typography variant="body1"><Link sx={{ color: 'white' }} href="/cgu-cgv">CGU / CGV</Link></Typography>
              <Typography variant="body1"><Link sx={{ color: 'white' }} href="/privacy-policy">Politique de confidentialité</Link></Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1.5 }}>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <PhoneIcon sx={{ fontSize: 20, marginRight: 2 }} />
                    <Typography variant="body1">04 12 34 56 78</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <LocationOnIcon sx={{ fontSize: 20, marginRight: 2 }} />
                    <Typography variant="body1">14, rue des étoiles, 34000 Montpellier</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <EmailIcon sx={{ fontSize: 20, marginRight: 2 }} />
                    <Typography variant="body1">local@saveursaison.com</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <InstagramIcon sx={{ color: 'white' }} />
                  <FacebookIcon sx={{ color: 'white' }} />
                </Box>

                <ToggleColorMode handleThemeChange={handleThemeChange} />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
