// Constants
const ANALYTICSBASE = `${process.env.REACT_APP_APISCHEMA}://${process.env.REACT_APP_APIHOST}:${process.env.REACT_APP_APIPORT}/analytics/`


function getDates(arr) {
  let dates = []

  arr.map(val => dates.push(val.day))

  return dates
}

export async function getWAU() {
  return await fetch(ANALYTICSBASE + 'wau')
    .then((res) => res.json())
    .then((res) => {
      // merge all dates into an array
      let dates = getDates(res.wau)
      
      // merge all daily users number into an array
      let dailyUsers = []
      res.wau.map(wauDay => {
        dailyUsers.push(wauDay.wau)
        
        return null
      })

      return [dates, dailyUsers]
    })
}

export async function getWES() {
  return await fetch(ANALYTICSBASE + 'wes')
    .then((res) => res.json())
    .then((res) => {
      // merge all dates into an array
      let dates = getDates(res.wes)
      
      // merge all daily users number into an array
      let dailyEvents = []
      res.wes.map(wauDay => {
        dailyEvents.push(wauDay.wes)
        
        return null
      })

      return [dates, dailyEvents]
    })
}

export async function getWAM() {
  return await fetch(ANALYTICSBASE + 'wam')
    .then((res) => res.json())
    .then((res) => {
      // merge all dates into an array
      let dates = getDates(res.wam)
      
      // merge all daily users number into an array
      let dailyMentors = []
      res.wam.map(wauDay => {
        dailyMentors.push(wauDay.wam)
        
        return null
      })

      return [dates, dailyMentors]
    })
}