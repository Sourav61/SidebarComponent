import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ImageIcon from '@mui/icons-material/Image';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "MailBox",
        icon: <EmailIcon />,
        link: "/mailBox"
    },
    {
        title: "Analytics",
        icon: <AnalyticsIcon />,
        link: "/analytics"
    },
    {
        title: "Dashboard",
        icon: <SpaceDashboardIcon />,
        link: "/dashboard"
    },
    {
        title: "Friends",
        icon: <GroupIcon />,
        link: "/friends"
    },
    {
        title: "Images",
        icon: <ImageIcon />,
        link: "/images"
    },
]