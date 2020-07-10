import React, { useContext, useEffect } from 'react';
import { Card, CardContent, Typography, Box, makeStyles} from '@material-ui/core';
import { GlobalContext } from '../../context/State';
import { fetchGlobalData } from '../../api/index';
import CountUp from 'react-countup';

const useStyle = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '5px',
    backgroundColor: '#faffff',
  },
});

export const Cards = () => {
  const classes = useStyle();

  const {
    data: { confirmed, recovered, deaths },
    updateData,
  } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      const globalData = await fetchGlobalData();
      updateData(globalData);
    })();
  }, []);

  return (
     <Box display="flex" flexDirection="column" alignItems="center">
       <Box mb={1}>
         <Card className={classes.root}>
           <CardContent>
             <Typography variant='inherit' style={{ fontWeight:'bold', display:'flex', justifyContent:'center', color:'#17a2b8'}} gutterBottom>CASES</Typography>
             <Typography variant='h6' style={{display:'flex', justifyContent:'center', color:"#50658e", fontWeight:'bold'}}>
               <CountUp art={0} end={confirmed} duration={2.5} separator=","/>
             </Typography>
           </CardContent>
         </Card>
       </Box>
       <Box mb={1}>
         <Card className={classes.root}>
           <CardContent>
             <Typography variant='inherit' style={{ fontWeight:'bold', display:'flex', justifyContent:'center', color:'#f86168'}} gutterBottom>FATALITIES</Typography>
             <Typography variant='h6' style={{display:'flex', justifyContent:'center', color:"#50658e", fontWeight:'bold'}}>
               <CountUp start={0} end={deaths} duration={2.5} separator=","/>
             </Typography>
           </CardContent>
         </Card>
       </Box>
       <Box mb={1 }>
         <Card className={classes.root}>
           <CardContent>
             <Typography variant='inherit' style={{ fontWeight:'bold', display:'flex', justifyContent:'center', color:'#0f9c00'}} gutterBottom>RECOVERED</Typography>
             <Typography variant='h6' style={{display:'flex', justifyContent:'center', color:"#50658e", fontWeight:'bold'}}>
               <CountUp start={0} end={recovered} duration={2.5} separator=","/>
             </Typography>
           </CardContent>
         </Card>
       </Box>
     </Box>
  );
};
