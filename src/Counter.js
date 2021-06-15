import React, { useState, useEffect } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count
  })

  return (
    <div>
      <div>
        <div>
          <button onClick={() => setCount(count - 1)}>Subtract 1</button>
        </div>
        <div>{count}</div>
        <div>
          <button onClick={() => setCount(count + 1)}>Add 1</button>
        </div>
        <div>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <div>
          <button onClick={() => setCount((prevCount) => prevCount / 2)}>
            Halve the count
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
