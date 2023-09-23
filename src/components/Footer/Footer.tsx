import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

const Footer = () => {
  return (
    <Container maxWidth='lg'>
      <Grid
        container
        alignItems='center'
        direction='row'
        justifyContent='flex-end'
        mb={2}
        pt={1}
      >
        <Typography component='h6' fontSize={16} fontWeight='semibold' ml={2}>
          Made ❤️ by{' '} Cesar Santana
        </Typography>
      </Grid>
    </Container>
  );
};

export default Footer;
