import { Typography, Paper } from '@mui/material';

function LegalNotice() {
  return (

      <Paper elevation={3} sx={{ my : 3, textAlign: 'center', minHeight: '70vh', maxWidth: '70vw'}}>
        <Typography variant="h5" gutterBottom>Mentions Légales</Typography>
        <Typography paragraph>
          <strong>Nom de l&apos;entreprise :</strong> Saveurs-saisonnières
        </Typography>
        <Typography paragraph>
          <strong>Responsable de la publication :</strong> Paul HENRY
        </Typography>
        <Typography paragraph>
          <strong>Adresse :</strong> 14, rue des étoiles, 34000 Montpellier
        </Typography>
        <Typography paragraph>
          <strong>Téléphone :</strong> 04 12 34 56 78
        </Typography>
        <Typography paragraph>
          <strong>Email :</strong> local@saveursaison.com
        </Typography>
        <Typography paragraph>
          <strong>Numéro de SIRET :</strong>  701 421 212 00018
        </Typography>
        <Typography paragraph>
          <strong>Capital social :</strong> 34000€
        </Typography>
        <Typography paragraph>
          <strong>Numéro de TVA intracommunautaire :</strong> 701 421 212 00018
        </Typography>
        <Typography paragraph>
          <strong>Hébergeur :</strong> Vercel // Fly
        </Typography>
      </Paper>

  );
}

export default LegalNotice;
