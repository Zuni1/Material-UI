import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CardComponent from './CardComponent'
import CommonModal from '../CommonElements/CommonModal'

export default function Authentication() {

  const [open, setOpen] = React.useState(false)

  return (
    <Grid item xs={8} sx={{marginLeft: '340px', marginTop: '40px', backgroundColor: '#f7f7f7'}}>
      <CardComponent click={() => setOpen(true)}/>
      <Typography 
        align="center"
        sx={{margin: '40px 16px', color: '#828181', fontSize: '18px'}}
      >
        No users for this project yet
      </Typography>
      <CommonModal open={open} handleClose={() => setOpen(false)}/>
    </Grid>
  )
}
