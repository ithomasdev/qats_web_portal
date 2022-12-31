import { AppBar, Avatar, Badge, Toolbar, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    largeLogo: {
        color: "black !important",
        display: "none",
        [theme.breakpoints.up('sm')]: {
            display: "block",
        }
    },
    smallLogo: {
        color: "black !imporant",
        display: "block",
        [theme.breakpoints.up('sm')]: {
            display: "none",
        }
    },
    icons: {
        display: "flex",
        alignItems: "center",
    }
}));

export default function Navigation() {
    const classes = useStyles();
    return (
        <AppBar position="fixed" elevation={0} sx={{background: '#FFFFFF'}}>
            <Toolbar className={classes.toolbar}>
                <Link href="/" variant="h6" underline="none" className={classes.largeLogo}>QATS Web Portal</Link>
                <Link href="/" variant="h6" underline="none" className={classes.smallLogo}> QWP </Link>
                <div className={classes.icons}>
                    <Avatar alt="Isaiah Thomas" src="" sx={{bgcolor: 'primary.main'}}>IT</Avatar>
                </div>
            </Toolbar>
        </AppBar>
    )
}
