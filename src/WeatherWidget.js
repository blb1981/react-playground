import React, { useState, useEffect } from 'react'
import axios from 'axios'

// http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml

const WeatherWidget = () => {
  const [wx, setWx] = useState({})
  useEffect(() => {
    // axios
    //   .get(
    //     'http://www.7timer.info/bin/api.pl?lon=39.45&lat=-87.30&product=astro&output=json'
    //   )
    //   .then((wx) => {
    //     console.log(wx)
    //   })
    axios.get('http://www.7timer.info/bin/api.pl?lon=39.45&lat=-87.30&product=meteo&output=json')
    .then(weather => {
      // setWx(weather)
      console.log(weather)
      // console.log(wx)
    }).catch(err => {
      console.log(err)
    })
    
  }, [wx])

  return (
    <div>
      <h1>Weather</h1>
      <p>
        Temp: {'temp here'} <br />
        Wind: {'wind here'}
      </p>
    </div>
  )
}

export default WeatherWidget
