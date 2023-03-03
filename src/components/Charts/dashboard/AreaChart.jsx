import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    // Title,
    Tooltip,
    Filler,
    Legend
);


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const data = {
    labels,
    datasets: [
        {

            label: 'Daily Login',
            data: [1,2,4,1,2,1,5],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: "#FFFFFF",
            borderWidth: 3
        },
    ],
};

const AreaChart = () => {

    return <Line  data={data} />;
}
export default AreaChart;