import React from 'react';
import { Cards } from '../card/Cards';
import { makeStyles, Typography, Box } from '@material-ui/core';
import Image from './images/Backgroundimg1.png';
import LadyImg from './images/ladyimg.png';
import {SelectSituation} from '../select/SelectSituation'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    overflow: 'hidden',
    // width:"100%",
    height: '100%',
    backgroundImage: `url(${Image})`,
    backgroundColor:'#faffff',
    backgroundPosition: 'center' /* Center the image */,
    backgroundRepeat: 'no-repeat' /* Do not repeat the image */,
    backgroundSize: 'cover',
  },
  box: {
  },
});

export const Background = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box pt={4} maxWidth="500px">
        <Box display="flex"  >
          <Typography variant="h2" style={{fontFamily: 'Sans-serif', fontWeight: 'bold', color:"#50658e" }}>
            CORONA
          </Typography>
          <Box mt={1}>
            <Typography variant='h4' style={{ fontSize:18,fontWeight:500, color:'#f86168'}}>COVID-19</Typography>
            <Typography variant='h1' style={{fontFamily: 'Sans-serif' ,fontSize:27,fontWeight:'bold', color:"#50658e"}}>VIRUS</Typography>
          </Box>
        </Box>
        
        <Typography style={{marginLeft:20, color:"#50658e"}}  >
          The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China
          in December 2019, the outbreak was later recognized as a pandemic by
          the World Health Organization (WHO) on 11 March 2020.
        </Typography>
        <SelectSituation />
      
        <Box>
          <Cards />
        </Box>
      </Box>
      <Box mt={3} display="flex" alignContent="space-around">
        <img
          src={LadyImg}
          width="550px"
          height="550px"
          backgroundPosition="center"
          alt=""
        ></img>
      </Box>
    </div>
  );
};
