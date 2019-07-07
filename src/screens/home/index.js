import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/core/styles';

import niallImage from 'assets/niall.png'

const useStyles = makeStyles(theme => ({
  home: {
    height: '100vh',
  },
  title: {
    fontWeight: 400
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'

  },
  niallImageContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  niallImage: {
    width: '100%'
  },
  buttonLink: {
    margin: theme.spacing(1),
  },
}))

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.home}>
      <CssBaseline />
      <Grid item xs={12} md={7} className={classes.info}>
        <Container>
          <Typography variant="h1" component="h5" color="inherit" style={{marginBottom: 40}}>
            Hi, I'm <span className={classes.title}>Niall Curtis</span>
          </Typography>
          <Divider />
          <Typography variant="h6" color="inherit" style={{marginTop: 40, fontWeight: 300, marginBottom: 30}}>
            Software developer currently working at <a style={{color: 'inherit'}} href="https://simplydo.co.uk">Simply Do Ideas</a>. Experienced in planning and delivering full-stack web and mobile applications, using the latest technologies without compromising on quality. Work regularly with Javascript (ES6), React, Python, Serverless, and many more. Contact me via email at <a style={{color: 'inherit'}} href="mailto:niallycurtis@gmail.com">niallycurtis@gmail.com</a>.
          </Typography>
          <div>
            <IconButton href="https://github.com/xniallc" variant="contained" className={classes.buttonLink}>
              <FontAwesomeIcon icon={['fab', 'github']} size="2x"  />
            </IconButton>
            <IconButton href="https://linkedin.com/in/niallcurtis" variant="contained" className={classes.buttonLink}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"  />
            </IconButton>
          </div>
        </Container>
      </Grid>
      <Grid item xs={false} md={5} className={classes.niallImageContainer}>
        <img src={niallImage} className={classes.niallImage} />
      </Grid>
    </Grid>
  )
}

export default Home