import React from 'react'

import ApiExample from './ApiExample'
import ClassBased from './ClassBased'
import Counter from './Counter'
import CycleThrough from './CycleThrough'
import MultiState from './MultiState'
import Random from './Random'

import './App.css'

const App = () => {
  return (
    <div>
      <Counter />
      <hr />
      <Random />
      <hr />
      <ApiExample />
      <hr />
      <ClassBased />
      <hr />
      <MultiState />
      <hr />
      <CycleThrough />
    </div>
  )
}

export default App
