import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const CommonModal = ({open, handleClose}) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 24,
        p: 4,
    };
      
  return (
    <Modal
        open={open}
        onClose={handleClose}
    >   
        <Box sx={style}>
            <Typography gutterBottom variant="h4" align="center">
                Add New User
            </Typography>
            <Grid>
                <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                    <form>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
                </Card>
            </Grid>
        </Box>
    </Modal>
  )
}

export default CommonModal

