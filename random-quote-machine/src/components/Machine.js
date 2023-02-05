import React, { useState } from 'react';
import {Quotes} from "./Quotes.js"
import Typography from '@mui/material/Typography'
import TwitterIcon from '@mui/icons-material/Twitter';
import Button from '@mui/material/Button'
import { Stack, Box, Link } from '@mui/material';
import styled from '@emotion/styled';

export const Machine = () => {

const [index, setIndex] = useState(0);

const UserBox = styled(Stack)({
  
  direction:"column",
  alignItems:"center",
  justifyContent:"center",
  minHeight:"100vh",
  gap: "10px",
})


const ChangeQuote = () => {
    if (index < 9) {
        setIndex(index + 1)
    } else {
        setIndex(0)
    }
}

const path = `https://twitter.com/intent/tweet?text=${Quotes[index].statement}  -${Quotes[index].name}`
  return (
    <>
    <UserBox bgcolor={"#"+ Quotes[index].color}>
      <Box bgcolor="white" sx={{width:"70vh", padding:"25px", borderRadius:"10px"}}>
      <Typography variant="h4" component="h1" color={"#"+ Quotes[index].color} pb="1vw"> {Quotes[index].statement}</Typography>
       <Typography textAlign="right" variant="h6" color={"#"+ Quotes[index].color} pb="2vw">- {Quotes[index].name}</Typography> 
       <Stack  direction="row" justifyContent="space-between">
        <Button variant="contained" color="primary" sx={{backgroundColor:"#"+ Quotes[index].color, "&.MuiButtonBase-root:hover": {
                bgcolor: "#"+ Quotes[index].color
              }}} onClick={() => ChangeQuote()}>
         New Quote
       </Button>
       <Link href={path} target={"_blank"} sx={{textDecoration:"none"}}>
       <Button variant="contained" sx={{backgroundColor:"#"+ Quotes[index].color, "&.MuiButtonBase-root:hover": {
                bgcolor: "#"+ Quotes[index].color
              }}} endIcon={<TwitterIcon/>} >
       Tweet 
       </Button> 
       </Link>
       </Stack> 
      </Box> 
      <Typography color="white">By Moinuddin</Typography> 
    </UserBox>  
    </>
  )
}
