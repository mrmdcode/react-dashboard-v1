import React from 'react';
import PieChart from "../Charts/dashboard/PieChart";

const ChartBox = ({title,children,place}) => {

    return (
        <div className="chart-box">
            <div className={"title "+place}>
                {title}
            </div>
            {children}
        </div>
    )
}
export default ChartBox;