import { Typography, Container, List, ListItem, ListItemText, Divider, Paper, useTheme } from '@mui/material';


function CguCgv() {
  const theme = useTheme();

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} maxWidth="md">
      <Paper elevation={3} sx={{ p: 1, my: 2, width: '100%', textAlign: 'center'}}>
        <Typography variant="h5" gutterBottom>
          Conditions Générales d'Utilisation (CGU)
        </Typography>
        <Divider sx={{ borderColor: theme.palette.primary.main, m : 2 }} />
        <Typography paragraph>
          <strong>Nom de l'entreprise :</strong> Saveurs-saisonnières
        </Typography>
        <Typography paragraph>
          <strong>Objectif principal du site ou du service :</strong> Commande de produits alimentaires en ligne.
        </Typography>
        <Typography paragraph>
          <strong>Conditions d'utilisation :</strong>
          <List>
            <ListItem disablePadding>
              <ListItemText primary="Les utilisateurs doivent accepter l'utilisation de cookies nécessaires au fonctionnement de l'application." />
            </ListItem>
            <ListItem disablePadding>
              <ListItemText primary="Les utilisateurs conservent leurs droits sur les informations qu'ils ont saisies sur le site (nom, prénom, email, mot de passe)." />
            </ListItem>
          </List>
        </Typography>
        <Typography paragraph>
          <strong>Politique en matière de propriété intellectuelle :</strong> Saveurs-saisonnières est une marque déposée. Tous droits réservés.
        </Typography>
        <Typography paragraph>
          <strong>Litiges et violations des conditions d'utilisation :</strong> Tout litige ou violation des conditions d'utilisation sera traité conformément à la législation en vigueur.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 1, my: 2, width: '100%', textAlign: 'center'}}>
        <Typography variant="h5" gutterBottom>
          Conditions Générales de Vente (CGV)
        </Typography>
        <Divider sx={{ borderColor: theme.palette.primary.main, m : 2 }} />
        <Typography paragraph>
          <strong>Produits ou services proposés à la vente :</strong> Fruits, légumes, paniers de fruits et légumes.
        </Typography>
        <Typography paragraph>
          <strong>Prix et modalités de paiement :</strong> Les prix varient de 1.5€ à 50€ par pièce. Les modalités de paiement acceptées sont gérées par Stripe.
        </Typography>
        <Typography paragraph>
          <strong>Conditions de livraison ou de prestation des services :</strong> Le client doit venir chercher sa commande à une adresse spécifiée en ville.
        </Typography>
        <Typography paragraph>
          <strong>Politiques de retour et de remboursement :</strong> Aucun remboursement n'est possible sur les fruits et légumes.
        </Typography>
        <Typography paragraph>
          <strong>Garanties offertes sur les produits ou services :</strong> Les produits sont certifiés bio, garantissant leur qualité et fraîcheur.
        </Typography>
        <Typography paragraph>
          <strong>Litiges liés à des transactions commerciales :</strong> Les litiges liés à des transactions commerciales sont traités par Stripe.
        </Typography>
      </Paper>
    </Container>
  );
}

export default CguCgv;
