import React, { useState, useEffect } from 'react'
import axios from 'axios'

// https://jsonplaceholder.typicode.com/users

const ApiExample = () => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((users) => {
      setUsers(users.data)
      setLoading(false)
    })
  }, [])

  return loading ? (
    <div>...loading</div>
  ) : (
    <div>
      {users.map((user) => {
        return <li>{user.name}</li>
      })}
    </div>
  )
}

export default ApiExample
