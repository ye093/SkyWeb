import React from 'react';
import { makeStyles, Paper, Box, Grid } from '@material-ui/core';
import LoginForm from '../src/components/LoginForm';
import Router from 'next/router';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '0 auto',
    },
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
    }
}));

function Index(props) {
    const classes = useStyles();
    return (
        <Grid className={classes.root} item md={6} lg={3}>
            <Paper className={classes.paper}>
                {/* 登录框 */}
                <LoginForm onLogin={() => Router.push('/main')} />
            </Paper>
        </Grid>
    );
}


export default Index;