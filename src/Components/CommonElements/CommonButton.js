import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = ({name, variant, color, click}) => {
  return (
    <Button 
      variant={variant}
      color={color}
      onClick={click}
    >
      {name}
    </Button>
  )
}

export default CommonButton
