import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: theme.palette.secondary.main
    }
}));

export default function About() {
    const classes = useStyles();

    return <Container className={classes.container}>About</Container>;
}
