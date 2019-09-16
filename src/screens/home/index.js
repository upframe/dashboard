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
    fetch(`${process.env.REACT_APP_APISCHEMA}://${process.env.REACT_APP_APIHOST}:${process.env.REACT_APP_APIPORT}/analytics/wau`)
      .then((res) => res.json())
      .then((res) => {
        // merge all dates into an array
        let dates = []
        res.wau.map(wauDay => {
          dates.push(wauDay.day)
          
          return null
        })
        // merge all daily users number into an array
        let dailyUsers = []
        res.wau.map(wauDay => {
          dailyUsers.push(wauDay.wau)
          
          return null
        })

        // display data
        setData({
          labels: dates,
          datasets: [
            {
              label: 'Weekly Active Users',
              fill: false,
              lineTension: 0.05,
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
              data: dailyUsers,
            }
          ]
        })
      })
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