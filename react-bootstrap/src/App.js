import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProTip from './ProTip';

import ButtonAppBar from './components/appbar';
import Footer from './components/footer';

function Copyright() {
  return (
    <Typography>
        Your Website
    </Typography>
  );
}

export default function App() {
  return (

    <Container>

      <ButtonAppBar />

      <Box sx={{ my: 4 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example with styled-components
        </Typography>

        <ProTip />

        <Copyright />
        
      </Box>

      <Footer />
      
    </Container>
  );
}