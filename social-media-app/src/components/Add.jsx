import { Avatar, Fab, Modal, Tooltip, Typography} from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import React from 'react'
import { Box } from '@mui/system';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})


export const Add = () => {

const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip title="Add" sx={{position:"fixed", bottom:20, left:{xs: "calc(50% - 25px)", md: 30}}} onClick={e => setOpen(true)}>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        </Tooltip>
        <StyledModal
            open = {open}
            onClose={e => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                <Typography variant="h6" color="gray" textAlign="Center">Create Post</Typography>
                <UserBox>
                    <Avatar sx={{width:30, height:30}} src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'/>
                    <Typography variant="span" fontWeight={500}>Moinuddin</Typography>
                </UserBox>
            </Box>
        </StyledModal>
    </>
  )
}
