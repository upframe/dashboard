import React, { useState, useEffect } from 'react'

import LineChart from '../../components/linechart'

import { getWAU, getWES, getWAM } from '../../utils/api'
import { shuffle } from '../../utils/array'
import { COLORS } from '../../utils/colors'

import './style.css'

const shuffleColorsIndex =  () => shuffle(Object.keys(COLORS))

const Home = () => {
  const [wau, setWau] = useState()
  const [wes, setWes] = useState()
  const [wam, setWam] = useState()

  useEffect(() => {
    let colorsIndex = shuffleColorsIndex()

    async function fetchWAU() {
      const [wauDates, dailyUsers] = await getWAU()

      // display data
      setWau({
        labels: wauDates,
        datasets: [
          {
            label: 'Weekly Active Users',
            fill: false,
            lineTension: 0.05,
            backgroundColor: COLORS[colorsIndex[0]],
            borderColor: COLORS[colorsIndex[0]],
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: COLORS[colorsIndex[0]],
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: COLORS[colorsIndex[0]],
            pointHoverBorderColor: COLORS[colorsIndex[0]],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: dailyUsers,
          }
        ]
      })

      // re-shuffle the colors array
      colorsIndex = shuffle(Object.keys(COLORS))

      const [wesDates, wes] = await getWES()

      // display data
      setWes({
        labels: wesDates,
        datasets: [
          {
            label: 'Weekly Scheduled Events',
            fill: false,
            lineTension: 0.05,
            backgroundColor: COLORS[colorsIndex[0]],
            borderColor: COLORS[colorsIndex[0]],
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: COLORS[colorsIndex[0]],
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: COLORS[colorsIndex[0]],
            pointHoverBorderColor: COLORS[colorsIndex[0]],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: wes,
          }
        ]
      })

      colorsIndex = shuffle(Object.keys(COLORS))

      const [wamDates, wam] = await getWAM()

      // display data
      setWam({
        labels: wamDates,
        datasets: [
          {
            label: 'Weekly Active Mentors',
            fill: false,
            lineTension: 0.05,
            backgroundColor: COLORS[colorsIndex[0]],
            borderColor: COLORS[colorsIndex[0]],
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: COLORS[colorsIndex[0]],
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: COLORS[colorsIndex[0]],
            pointHoverBorderColor: COLORS[colorsIndex[0]],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: wam,
          }
        ]
      })
    }

    fetchWAU()
  }, [])

  return (
    <div className='home'>
      <div className='wau-graph'>
        <LineChart options={wau} />
      </div>

      <div classname='wes-graph'>
        <LineChart options={wes} />
      </div>

      <div classname='wam-graph'>
        <LineChart options={wam} />
      </div>
    </div>
  )
}

export default Home