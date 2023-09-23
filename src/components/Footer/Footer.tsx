import { Box, Container, Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="secondary">
      <Container maxWidth='lg'>
        <Grid
          alignItems='center'
          flexDirection='row'
          display="flex"
          justifyContent='flex-end'
          mb={2}
          pt={1}
          width="100%"
        >
          <Typography component='h6' fontSize={16} fontWeight='semibold'>
            Made with ❤️ by{' '} Cesar Santana
          </Typography>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
