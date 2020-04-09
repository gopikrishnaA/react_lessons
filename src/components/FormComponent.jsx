import React, { Component } from "react";

class FormComponent extends Component {

  state = {
    error: '',
    value: ''
  }

  onSubmit (event) {
    event.preventDefault();
    const { value } = this.state
    if(value.length < 3) {
       this.setState({
        error: 'Username is lessthan 3 chars'
       })
    } else  {
      this.props.history.push('/about')
    }
  }

  onChangeListener (event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    const {error} = this.state
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <input type='text' placeholder='username' onChange={this.onChangeListener.bind(this)}/>
        {error ? <div>
          <span style={{color: 'red'}}>
            {error}
          </span>
        </div> : null}
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default FormComponent;