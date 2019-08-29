import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

import './style.css'

const Home = () => {

  const mentor = 'mentor'
  const [data, setData] = useState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [developerPass, setDeveloperPass] = useState('')

  useEffect(() => { // Component Did Mount
    // //DEBUG
    // setData({
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'Weekly Active Users',
    //       fill: false,
    //       lineTension: 0.1,
    //       backgroundColor: 'rgba(75,192,192,0.4)',
    //       borderColor: 'rgba(75,192,192,1)',
    //       borderCapStyle: 'butt',
    //       borderDash: [],
    //       borderDashOffset: 0.0,
    //       borderJoinStyle: 'miter',
    //       pointBorderColor: 'rgba(75,192,192,1)',
    //       pointBackgroundColor: '#fff',
    //       pointBorderWidth: 1,
    //       pointHoverRadius: 5,
    //       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //       pointHoverBorderColor: 'rgba(220,220,220,1)',
    //       pointHoverBorderWidth: 2,
    //       pointRadius: 1,
    //       pointHitRadius: 10,
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //     }
    //   ]
    // })
    // // Remove when done above
    fetch('http://localhost/analytics')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
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
        // data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        // data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40]
      })
  }, [])

  const addMentor = () => {
    const fetchBody = {
      email, password, name, developerPass, type: 'mentor'
    }
    const fetchData = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(fetchBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost/auth/register', fetchData)
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 400) {
          alert('Insufficient fields')
        } else if (res.code === 401) {
          alert('Wrong developer pass')
        } else {
          alert('New mentor added')
        }
      })
  }

  return (
    <div className='home'>
      <div className='kpi-graph'>
        <Line data={data} options={{ maintainAspectRatio: false }}/>
      </div>
      <div className='add-mentor'>
        <h1>Add a new mentor</h1>
        <input placeholder='Name' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
        <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input placeholder='Magic Words' type='password' value={developerPass} onChange={(e) => setDeveloperPass(e.target.value)}/>
        <button onClick={addMentor}>Add!</button>
      </div>
    </div>
  )
}

export default Home