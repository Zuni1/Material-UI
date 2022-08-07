import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

const CommonBadge = ({badgeContent, iconColor}) => {

    const haveNotf = `You have ${badgeContent} notifications`;
    const noNotf = 'No new notifications';

    return (
        <Tooltip title={badgeContent===0 ? noNotf : haveNotf}>
            <IconButton color={iconColor}>
                <Badge 
                    badgeContent={badgeContent} 
                    color="error"
                >
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>
    )
}

export default CommonBadge
