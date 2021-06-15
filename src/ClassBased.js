import React from 'react'

class ClassBased extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Billy Bob',
    }
    this.changeName = this.changeName.bind(this)
    this.appendName = this.appendName.bind(this)
  }

  changeName = () => {
		console.log('merging state')
    this.setState({ name: 'Joe Smith' })
  }

  appendName = () => {
    this.setState((prevState) => {
			console.log('merging state')
      return {
        name: prevState.name + ' is awesome',
      }
    })
  }

  render = () => {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>Change name</button>
        <button onClick={this.appendName}>Append name</button>
      </div>
    )
  }
}

export default ClassBased
