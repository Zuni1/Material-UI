import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

const Search = ({placeholder, onChange, searchBarWidth}) => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}}>
        <SearchIcon sx={{marginRight: '6px'}}/>
        <Input
            placeholder={placeholder}
            onChange={onChange}
            sx={{width: searchBarWidth}}
            disableUnderline
        />
    </Box>
  )
}

export default Search
