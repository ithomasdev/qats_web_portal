import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.primary.main
    }
}));

export default function Error() {
    const classes = useStyles();

    return <Container className={classes.container}>Error 404</Container>;
}
