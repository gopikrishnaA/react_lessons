import React, { Component } from 'react'
import Proptypes from 'prop-types'

class NewComponent extends Component {
    constructor(props) {
        super(props)
        //props vs state
        this.state = {
            counter: 0,
            host: ''
        }
        this.update = this.update.bind(this)
    }
    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log(nextProps, nextState, this.state.counter)
    //     // if (JSON.stringify(nextProps.text) !== this.props.text) {
    //     //     return true
    //     // }
    //     // retun false
    // }
    // componentWillMount() {
    //     console.log('-----componentWillMount--------')
    // }
    static getDerivedStateProps() {
        
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
                    host: data.host
                })
                // this.props.getData(data.host)
            }).catch(err => {
                // reject 
                console.error(`err`, err)
            })
    }
    componentWillUnmount() {
        console.log('-----componentWillUnmount--------')
    }

    update() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        console.log('-----render--------')
        return (<div>
            This is {this.state.counter} host is {this.state.host}
            <button onClick={this.update}>Show</button>
        </div>)
    }
}
export default NewComponent

NewComponent.prototypes = {
    getData: Proptypes.func.isRequired
  }