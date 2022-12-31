import { Drawer, Typography } from '@mui/material';
import React from 'react';
import { Home } from "@mui/icons-material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    drawer: {
        background: "black",
        display: "flex",
        paddintTop: theme.spacing(10)
    }
}));

/*
    Fixes:
    Implement drawer,
    Style to look slightly less modern
*/
export default function Sidebar(theme) {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const classes = useStyles();
    return (
        <Drawer variant="permanent" open={open} className={classes.drawer}>
            <Typography>Hello</Typography>
        </Drawer>
    )
}
