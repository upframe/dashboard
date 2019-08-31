import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

import './style.css'

const Home = () => {

  const [data, setData] = useState()

  useEffect(() => { // Component Did Mount
    //DEBUG
    setData({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Weekly Active Users',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        }
      ]
    })
    // Remove when done above
    // fetch('http://localhost/analytics')
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res)
    //     setData({
    //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //       datasets: [
    //         {
    //           label: 'Weekly Active Users',
    //           fill: false,
    //           lineTension: 0.1,
    //           backgroundColor: 'rgba(75,192,192,0.4)',
    //           borderColor: 'rgba(75,192,192,1)',
    //           borderCapStyle: 'butt',
    //           borderDash: [],
    //           borderDashOffset: 0.0,
    //           borderJoinStyle: 'miter',
    //           pointBorderColor: 'rgba(75,192,192,1)',
    //           pointBackgroundColor: '#fff',
    //           pointBorderWidth: 1,
    //           pointHoverRadius: 5,
    //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //           pointHoverBorderColor: 'rgba(220,220,220,1)',
    //           pointHoverBorderWidth: 2,
    //           pointRadius: 1,
    //           pointHitRadius: 10,
    //           data: [65, 59, 80, 81, 56, 55, 40],
    //         }
    //       ]
    //     })
    //     // data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    //     // data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40]
    //   })
  }, [])

  return (
    <div className='home'>
      <div className='kpi-graph'>
        <Line data={data} options={{ maintainAspectRatio: false }} height={500}/>
      </div>
    </div>
  )
}

export default Home