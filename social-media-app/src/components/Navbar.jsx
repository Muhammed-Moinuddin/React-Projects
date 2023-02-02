import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from '@mui/material'
import React from 'react';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme}) => ({
  backgroundColor:"white",
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",

}))

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }

}))

const UserBox = styled(Box)(({theme}) => ({
  display:"none",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.down("sm")]:{
    display: "flex"
  }
}))

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: {xs:"none", sm: "block"} }}>Moin</Typography>
            <Pets sx={{display: {xs:"block", sm: "none"} }}/>
            <Search><InputBase placeholder='Search here'/></Search>
            <Icons>
              <Badge badgeContent={4} color="error">
                <Mail/>
              </Badge>
              <Badge badgeContent={2} color="error">
                <Notifications/>
              </Badge>
              <Avatar onClick={(e) => setOpen(true)} sx={{width:30, height:30}} src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
            </Icons>
            <UserBox onClick={(e) => setOpen(true)}>
              <Avatar sx={{width:30, height:30}} src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
              <Typography variant='span'>Moin</Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
          id="basic-menu"
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
