import React from 'react'

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CommonBadge from '../CommonElements/CommonBadge';
import CommonButton from '../CommonElements/CommonButton';

const Main = ({title}) => {

    const style = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '120%',
            padding: '20px',
            backgroundColor: '#009be5',
        },
        top: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '6px'
            }
        },
        docs: {
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        down: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
            marginLeft: '240px',
        },
    }

    return (
        <Box sx={style.container}>
            <Box sx={style.top}>
                <Typography sx={style.docs}>Go to Docs</Typography>

                <CommonBadge 
                    badgeContent={6}
                />

                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>

            <Box sx={style.down}>
                <Typography variant='h4' color='white'>{title}</Typography>

                <Box>
                    <CommonButton
                        name="Web setup"
                        variant="outlined"
                        color="secondary"
                    ></CommonButton>

                    <Tooltip title="help">  
                        <IconButton>
                            <HelpIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
        </Box>
    )
}

export default Main

