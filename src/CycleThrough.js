import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CycleThrough = () => {
  // Initialize empty state array & loading status
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentJobIndex, setCurrentJobIndex] = useState(0)

  // Clean up data, remove any items that don't have title as a key
  const cleanData = () => {
    setJobs((jobs) => {
      return jobs.filter((job) => job.title !== undefined)
    })
  }

  // Grab list from api
  // http://api.dataatwork.org/v1/jobs
  useEffect(() => {
    axios.get('http://api.dataatwork.org/v1/jobs').then(({ data }) => {
      setJobs(data)
      cleanData()
      setLoading(false)
    })
  }, [])

  // Function to cycle through list
  const cycle = () => {
    console.log(jobs.length)
    console.log(currentJobIndex)
    if (currentJobIndex <= jobs.length) {
      setCurrentJobIndex(0)
    }
    setCurrentJobIndex(currentJobIndex + 1)
  }

  return (
    <div>
      CycleThrough
      {loading ? (
        <div>...loading</div>
      ) : (
        <div>{jobs[currentJobIndex].title}</div>
      )}
      <div>
        <button onClick={cycle}>Cycle</button>
      </div>
    </div>
  )
}

export default CycleThrough
