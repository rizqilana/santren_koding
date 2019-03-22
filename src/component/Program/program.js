import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Program.css';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <h1 className="program">Program Kami</h1>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <card className="car">
            <img className="carr1" src={require('./Mondok.png')} />
            <h1
              className="H1"
              style={{
                marginTop: '95px',
                marginLeft: '45px',
                textAlign: 'center'
              }}>
              Mondok Koding
            </h1>
          </card>
        </Grid>
        <Grid item xs={3}>
          <card className="car2">
            <img className="carr2" src={require('./g2568.png')} />
            <h1
              className="H2"
              style={{
                marginTop: '95px',
                marginLeft: '10px',
                textAlign: 'center'
              }}>
              Koding Academy & Kajian Koding
            </h1>
          </card>
        </Grid>
        <Grid item xs={3}>
          <card className="car3">
            <img className="carr3" src={require('./Group (1).png')} />
            <h1
              className="H3"
              style={{
                marginTop: '95px',
                marginLeft: '45px',
                textAlign: 'center'
              }}>
              Kitab Koding
            </h1>
          </card>
        </Grid>
        <Grid item xs={3}>
          <card className="car4">
            <img className="carr4" src={require('./SMK koding.png')} />
            <h1
              className="H4"
              style={{
                marginTop: '95px',
                marginLeft: '45px',
                textAlign: 'center'
              }}>
              SMK Koding
            </h1>
          </card>
        </Grid>
        <Grid item xs={4}>
          <card className="car5">
            <img className="carr5" src={require('./AI.png')} />
            <h1
              className="H5"
              style={{
                marginTop: '95px',
                marginLeft: '45px',
                textAlign: 'center'
              }}>
              Santren AI
            </h1>
          </card>
        </Grid>
        <Grid item xs={4}>
          <card className="car6">
            <img className="carr6" src={require('./Koding college.png')} />
            <h1
              className="H6"
              style={{
                marginTop: '95px',
                marginLeft: '45px',
                textAlign: 'center'
              }}>
              Koding College
            </h1>
          </card>
        </Grid>
        <Grid item xs={4}>
          <card className="car7">
            <img className="carr7" src={require('./Fatimah dev.png')} />
            <h1
              className="H7"
              style={{
                marginTop: '95px',
                marginLeft: '45px',
                textAlign: 'center'
              }}>
              Fatimah Dev
            </h1>
          </card>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
