import { useDispatch, useSelector } from 'react-redux';
import { Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { setTheme, selectTheme } from '../features/authSlice';
import CustomTheme from '../assets/styles/CustomTheme';
import ToggleColorMode from './ToggleColorMode';

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
        px: 2,
      }}
    >
      <Grid
        container
        justifyContent={belowMd ? 'center' : 'center'}
        alignItems="center"
        textAlign="center"
      >
        {/* Colonnes pour mode mobile */}
        {belowMd && (
          <>
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <Typography variant="body1" color="white">
                  Yooo je suis le footer.
                </Typography>
                <Typography variant="body2" color="white">
                  {`© ${new Date().getFullYear()}.`}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: 'center' }}>
                <ToggleColorMode handleThemeChange={handleThemeChange} />
              </Box>
            </Grid>
          </>
        )}

        {/* Colonnes pour mode desktop */}
        {!belowMd && (
          <>
            <Grid item xs={4}>
              <Typography variant="body1" color="white">
                Yooo je suis le footer.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body2" color="white">
                {`© ${new Date().getFullYear()}.`}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <ToggleColorMode handleThemeChange={handleThemeChange} />
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
