import React from 'react';
import {Chart as ChartJS , ArcElement , Tooltip,Legend} from 'chart.js';
import {Doughnut} from "react-chartjs-2";

ChartJS.register(ArcElement ,Tooltip , Legend );

const labels =["Admin","Shop Manager","Writer","SEO DEv","Normal"];
const data ={
    labels,
    datasets :[
        {
            label:"# of vote",
            data :[15,20,30,45,10],
            backgroundColor : labels.map(()=> "#"+Math.round(Math.random()*1000000)),

        }
    ]

}

const DoughnutChart = () => {

    return <Doughnut data={data}/>
}
export default DoughnutChart;
