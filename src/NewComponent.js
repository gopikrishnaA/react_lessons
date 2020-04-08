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
    this.navigate = this.navigate.bind(this)
    console.log(this.props)
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
  componentWillUnmount() {
    console.log("========componentWillUnmount========")
    // remove listners
    // un Subscribe
    // cancel fetch api
  }

  update() {
    // this.setState({
    //   tags: [{ name: `grishma${Math.random()}` }, ...this.state.tags]
    // })
    console.log('=====>', this.input.value)
  }

  onChangeListner (event) {
    this.setState({
      value: event.target.value
    })
  }

  navigate () {
    this.props.history.go(-1)
  }

  render() {
    const { counter, tags, value } = this.state

    return [<div key='1'>
      This is {counter}
      <button onClick={this.update}>Show</button>
      {/* Uncontrolled component */}
      <input ref={(ref) => this.input = ref}></input>
      {/* Controlled component */}
      <input onChange={this.onChangeListner}></input>
      <p>{value}</p>
    </div>,
    <ul key='2'>
      {tags.map((tag) => <li key={tag.name}>{tag.name}</li>)}
    </ul>,
    <button key='3' onClick={this.navigate}>Navigate</button>
    ]
  }
}
export default NewComponent

NewComponent.prototypes = {
  getData: Proptypes.func.isRequired
}