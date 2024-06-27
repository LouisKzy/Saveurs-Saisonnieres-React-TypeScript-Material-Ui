import React from 'react';
import { Box, Typography, Grid, useMediaQuery, useTheme, Paper, CardContent } from "@mui/material";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../components/Arrow";
import Aubergine from '../assets/images/Aubergine.jpg';
import Banane from '../assets/images/Banane.jpg';
import broccoli from '../assets/images/broccoli.jpg';
import carrotte from '../assets/images/carotte.jpg';
import cerise from '../assets/images/cerise.jpg';
import citron from '../assets/images/citron.jpg';
import kiwi from '../assets/images/kiwi.jpg';
import Abbio from '../assets/images/Abbio.svg';
import homepageImage from '../assets/images/Myrtille.jpg';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down('md'));
  const images = [Aubergine, Banane, broccoli, carrotte, cerise, citron, kiwi];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />
  };

  return (
    <>
      {!belowMd && ( 
        <Box 
          sx={{
            position: 'relative',
            width: '100%',
            height: '91vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden', 
          }}
        >
          {/* Image d'arrière-plan */}
          <Box
            component="img"
            src={homepageImage}
            alt="Background Home"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          
          {/* Boîtes de contenu positionnées */}
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Paper elevation={12} sx={{ backgroundColor: theme.palette.secondary.main }}>
              <CardContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                <Typography color="white" variant="h6" component="h5">
                  RÉCUPÉRER DIRECTEMENT
                </Typography>
                <Typography color="white" variant="h6" component="h5">
                  CHEZ VOTRE PRODUCTEUR
                </Typography>
              </CardContent>
            </Paper>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography gutterBottom color="white" variant="h3">
              Commander des légumes et fruits frais de producteurs locaux
            </Typography>
            <Box component='img' src={Abbio} alt="Ab bio" sx={{ width: '150px', height: '150px' }}  />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '80%',
              left: '20%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Paper elevation={12} sx={{ backgroundColor: theme.palette.secondary.main }}>
              <CardContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                <Typography color="white" variant="h6" component="h5">
                  DISPONIBLE DÈS
                </Typography>
                <Typography color="white" variant="h6" component="h5">
                  1H APRES VOTRE COMMANDE
                </Typography>
              </CardContent>
            </Paper>
          </Box>
        </Box>
      )}

      {/* Contenu sous le carrousel */}
      <Box sx={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
        <Typography sx={{ marginBottom: '24px' }} variant="h4" color={theme.palette.secondary.main}>
          Commandez vos fruits et légumes simplement
        </Typography>
        <Typography sx={{ marginBottom: '24px' }} variant="h5" color={theme.palette.secondary.main}>
          En savoir plus sur les courses en ligne
        </Typography>
      </Box>
      
      {/* Carrousel */}
      <Box sx={{ textAlign: 'center', marginBottom: '32px' }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Nos producteurs locaux :
            </Typography>
            <Typography sx={{ maxWidth: '80%', margin: '0 auto' }}
            variant="body1" paragraph>
              Découvrez les visages derrière vos produits frais. Nos producteurs locaux s'engagent à vous offrir des produits de la plus haute qualité, cultivés avec soin et passion.
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', maxWidth: '600px', marginBottom: 12 }}>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <Box key={index}
                    component="img"
                    src={image}
                    alt={`Producteur ${index}`}
                    sx={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'cover',
                      borderRadius: '16px',
                      margin: '0 auto',
                    }}
                  />
                ))}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HomePage;
