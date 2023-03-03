import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement,Tooltip,Legend);

const labels = ["2015","2016","2017","2018","2019","2020"];
const data = {
    labels,
    datasets : [
        {
            label: '# of Votes',
            data : [500 ,804 , 456 , 230 ,  110],
            borderColor: labels.map(()=> "#"+Math.round(Math.random()*1000000)),
            backgroundColor: labels.map(()=> "#"+Math.round(Math.random()*1000000)),
            borderWidth: 1,
        },
        {
            label: '# of Votes',
            data : [50 ,80 , 56 , 20 ,  11],
            borderColor: labels.map(()=> "#"+Math.round(Math.random()*1000000)),
            backgroundColor: labels.map(()=> "#"+Math.round(Math.random()*1000000)),
            borderWidth: 1,
        }
    ]
}


const PieChart = () => {
    return <Pie
        data={data}
    />
}
export default PieChart;