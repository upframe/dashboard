import React from 'react'

import { Line } from 'react-chartjs-2'

import './index.scss'

const LineChart = ({options}) => {
  return (
    <Line data={options} options={{ 
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
          }
        }]
      }
     }} height={500}/>
  )
}

export default LineChart