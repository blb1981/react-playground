import React, { useState } from 'react'

const MultiState = () => {
  const [person, setPerson] = useState({
    name: 'Bob Smith',
    age: 62,
  })
  return (
    <div>
      {person.name}
      <br />
      {person.age}
      <button onClick={() => setPerson({ ...person, name: 'Bob Mitchell' })}>
        Change name
      </button>
    </div>
  )
}

export default MultiState
