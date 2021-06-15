import React, { useState } from 'react'

import './App.css'
import WeatherWidget from './WeatherWidget'
// import styles from './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="container">
        <div>
          <button onClick={() => setCount(count - 1)}>Subtract 1</button>
        </div>
        <div className="count">{count}</div>
        <div>
          <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
        <div className="reset">
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      <WeatherWidget />
    </div>
  )
}

export default App
