import React, { useState, useEffect } from 'react';
import { makeStyles, Grid, Typography, TextField, FormControlLabel, Checkbox, Button, Box, Snackbar, Slide } from '@material-ui/core';
import clsx from 'clsx';
import Link from './Link';
import { createHash } from 'crypto';

// 登录样式
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textField: {
        flexGrow: 1
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.h2,
    },
    fillWidth: {
        flexGrow: 1,
    },
    link: {
        color: theme.palette.text.primary,
        "&:hover": {
            textDecoration: 'none',
        }
    },
    login: {
        flexGrow: 1,
        fontSize: 15,
        margin: theme.spacing(2, 0),
    }
}));

// 登录框
function LoginForm(props) {
    const classes = useStyles();

    const [state, setState] = useState({});

    const { onLogin } = props;



    // 错误提示
    const [{ show, message }, setToast] = useState({
        show: false,
        message: '',
    });

    const setField = name => value => setState({
        ...state,
        [name]: value,
    });

    const handleCommit = () => {
        if (!state.username) {
            setToast({
                show: true,
                message: '请输入用户名',
            })
            return;
        }
        if (!state.password) {
            setToast({
                show: true,
                message: '请输入密码',
            })
            return;
        }

        const pwd = createHash('sha256').update(state.password).digest('hex');



        if (state.remember) {
            localStorage.setItem('username', state.username);
            localStorage.setItem('password', pwd);
            localStorage.setItem('remember', true);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
            localStorage.removeItem('remember');
        }

        onLogin();


    };

    const handleToastClose = () => {
        setToast({
            show: false,
            message: '',
        });
    };

    return (
        <Box className={classes.root} component="form" property={{
            autoComplete: "off"
        }}>
            <Grid container justify="center" item>
                <Typography component="div" className={classes.title}>用户登录</Typography>
            </Grid>
            <Grid container justify="center" item>
                <TextField variant="outlined" margin="dense" className={clsx(classes.textField, classes.dense)}
                    label="用户名" value={state.username || ''} onChange={e => setField('username')(e.target.value)} />
            </Grid>
            <Grid container justify="center" item>
                <TextField variant="outlined" margin="dense" className={clsx(classes.textField, classes.dense)}
                    type="password" label="密码" value={state.password || ''} onChange={e => setField('password')(e.target.value)} />
            </Grid>
            <Grid container justify="space-between" item alignItems="center">
                <Link href="/register" className={classes.link} >新用户注册</Link>
                <FormControlLabel label="记住密码" control={<Checkbox checked={state.remember} onChange={e => setField('remember')(event.target.checked)} />} />
            </Grid>

            <Grid container justify="center" item>
                <Button variant="text" className={classes.login} onClick={handleCommit} >登录</Button>
            </Grid>
            <Snackbar
                open={show}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'top'
                }}
                onClose={handleToastClose}
                TransitionComponent={Slide}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id" style={{ color: 'red' }}>{message}</span>}
            />
        </Box>
    );
}



export default LoginForm;