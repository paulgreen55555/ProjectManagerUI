import React from 'react';
import { Link } from "react-router-dom";
import StatisticModule from './StatisticModule'

function Dashboard (){
    return (
        <div>
            <h1>Dashboard</h1>
            <StatisticModule />
        </div>
    )
}

export default Dashboard