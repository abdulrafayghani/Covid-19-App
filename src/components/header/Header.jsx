import React from 'react'
import { makeStyles, AppBar , Toolbar, Button, Typography, Box} from '@material-ui/core'
import coronavirus from './coronavirus.png'

const useStyle = makeStyles({
    container:{
        backgroundColor:"#ebf7ff"
    }
})

export const Header = () => {
    const classes = useStyle()
    return (
        <div >
            <AppBar className={classes.container} position='static' color="#fafafa">
                <Toolbar>
                    <Box >
                    <Button >
                        <Typography style={{  marginLeft:25,fontSize:'30px', fontWeight: "600", marginTop:'15px',color:'#17a2b8'}} variant='h5'>K
                        <img src={coronavirus} width='35px' height='30px' alt=''>
                        </img>
                        VID-19</Typography> 
                    </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
