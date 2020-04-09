import React, { Component } from 'react'
import {connect} from 'react-redux'
import { update } from '../actions/update'
class UpdateColorComp extends Component {

    componentDidMount() {
        //es6 fetch
        fetch('https://petstore.swagger.io/v2/swagger.json')
          .then(response => {
            // pending state
            return response.json()
          }).then(data => {
            // resolve
            // this.setState({
            //   tags: data.tags
            // })
            // this.props.getData(data.host)

            this.props.dispatch({
                type: 'UPDATE_TAGS',
                payload: data.tags
            })
          }).catch(err => {
            // reject 
            console.error(`err`, err)
          })
      }
      
    updateColor() {
        this.props.dispatch(update())
    }
   render() {
       console.log(this.props)
        return(
            <button onClick={this.updateColor.bind(this)}>Change Color</button>
        )
    }
}

export default connect()(UpdateColorComp);