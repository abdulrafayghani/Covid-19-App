import React, {useContext} from 'react'
import { GlobalContext } from '../../context/State'
import { Box } from '@material-ui/core'
import { Doughnut, defaults } from 'react-chartjs-2'

defaults.global.maintainAspectRatio = false


export const Chart = () => {
    const { data: {confirmed, deaths, recovered} } = useContext(GlobalContext)
    console.log(confirmed)
    if(!confirmed){
        return <h4>...wait biiatch</h4>
    }
         const chartData = {
            labels:["Confirmed", "Deaths", "Recovered"],
            datasets:[{
                label: "Cases",
                data:[confirmed,deaths,recovered],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 0, 0, 0.4)',
                    'rgba(54, 162, 235, 0.2)',],
                borderColor: 'transparent',
                borderWidth: 1,
            }]
    }
    return (
        <Box height='100vh'>
            <Doughnut 
            data={chartData}
            options={{
                title: {
                    display:true,
                    responsive: true,
                    text:"Cases of COVID-19",
                    fontSize: 20,
                    fontColor:"black"
                }, 
                legend: {
                    display: true,
                    position: 'top',
                }
            }}
            />
        </Box>
    )
}
