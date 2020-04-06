import React, { Component } from 'react'
import Proptypes from 'prop-types'

class NewComponent extends Component {
  constructor(props) {
    super(props)
    //props vs state
    this.state = {
      counter: 0,
      tags: [],
      value: ''
    }
    this.update = this.update.bind(this)
    this.onChangeListner = this.onChangeListner.bind(this)
  }
  componentDidMount() {
    //es6 fetch
    fetch('https://petstore.swagger.io/v2/swagger.json')
      .then(response => {
        // pending state
        return response.json()
      }).then(data => {
        // resolve
        this.setState({
          tags: data.tags
        })
        // this.props.getData(data.host)
      }).catch(err => {
        // reject 
        console.error(`err`, err)
      })
  }
  update() {
    this.setState({
      tags: [{ name: 'grishma' }, ...this.state.tags]
    })

    console.log(this.ref.value)
  }

  onChangeListner (event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    const { counter, tags, value } = this.state

    return [<div key='1'>
      This is {counter}
      <button onClick={this.update}>Show</button>
      <input ref={(ref) => this.input = ref}></input>
      <input onChange={this.onChangeListner}></input>
      <p>{value}</p>
    </div>,
    <ul key='2'>
      {tags.map((tag) => <li key={tag.name}>{tag.name}</li>)}
    </ul>
    ]
  }
}
export default NewComponent

NewComponent.prototypes = {
  getData: Proptypes.func.isRequired
}