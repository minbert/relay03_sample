import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { positions } from '@material-ui/system';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/boostcamp-2020/relay_03">
          relay_03
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    footer: {
    
      padding: theme.spacing(3, 2),
      marginTop: 'auto',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        position:"fixed",
        bottom:0,
        width:'100%'
    },
  }));
function Footer() {
    
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">BoostCamp 2020</Typography>
          <Copyright />
        </Container>
        </footer>
    );
}

export default Footer;