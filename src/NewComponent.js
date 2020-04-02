import React, { Component } from 'react'

class NewComponent extends Component {
    constructor (props) {
        super(props)
        //props vs state
        this.state = {
            text: props.text,
            counter: 0
        }
        this.update = this.update.bind(this)
    }
    componentWillMount () {
        console.log('-----componentWillMount--------')
    }
    componentDidMount() {
        this.setState({
            text: 'gopi'
        })
        console.log('-----componentDidMount--------')
    }
    componentWillUnmount() {
        console.log('-----componentWillUnmount--------')
    }

    update () {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        console.log('-----render--------')
        return (<div>This is {this.state.counter}
        <button onClick={this.update}>Show</button>
            </div>)
    }
}
export default NewComponent
