import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Search from './Search';
import CommonButton from '../CommonElements/CommonButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import IconButton from '@mui/material/IconButton';

const CardComponent = ({click}) => {

  const style  = {
    display: 'flex', 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
  }

  const handleChange = (value) => {
    console.log(value);
  };

  return (
    <Card>
      <CardContent sx={style}>
        <Search
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth='700px'
        />
        <div>
          <CommonButton
            name="Add user"
            variant="contained"
            color="primary"
            click={click}
          ></CommonButton>
          
          <IconButton>
            <RefreshIcon/>
          </IconButton>
        </div>
        
      </CardContent>
    </Card>
  )
}

export default CardComponent
