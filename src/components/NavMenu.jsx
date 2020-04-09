import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { update } from '../actions/update'
const NavMenu = (props) => {
    return (
        <ul style={{backgroundColor: props.x}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
  return {
    x: state.a.color
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updatColor: () => dispatch(update())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);