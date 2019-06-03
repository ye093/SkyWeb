import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666',
    },
    cards: {
        display: 'flex',
    },
    card: {
        width: '120px',
        height: '150px',
        backgroundColor: 'white',
        borderRadius: '5px',
        transition: '0.2s',
        boxShadow: '3px 3px 12px 2px gray',
        '&:not(:first-child)': {
            marginLeft: '-2rem',
        },


        

        '&:not(:last-child):hover': {
            background: 'red',
            transform: 'translateY(-1rem)',
            '&~$card': {
                transform: 'translateX(2rem)',
            }
        },

    }

}));

function Main() {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <div className={styles.cards}>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>

            </div>
        </div>
    );
}

export default Main;