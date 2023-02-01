import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material'
import React from 'react';
import PetsIcon, { Pets } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

export const Navbar = () => {
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:"none", sm: "block"} }}>Moin</Typography>
            <Pets sx={{display: {xs:"block", sm: "none"} }}/>
        </StyledToolbar>
    </AppBar>
  )
}
