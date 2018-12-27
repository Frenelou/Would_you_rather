import React, {Component, Fragment} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {unsetAuthedUser} from '../actions/authedUser'

class Nav extends Component {
  setUser = (e) => {
    e.preventDefault()
    this.props.dispatch(unsetAuthedUser())

  }
  render() {
    return (<nav>
      <ul id='nav'>
        <li>
          <button onClick={this.setUser}>Log out</button>
        </li>
        <li>Hello, {this.props.userName}!</li>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Tweet
          </NavLink>
        </li>

      </ul>
    </nav>);
  }
}
function mapStateToProps({authedUser, users}) {
  var userName = authedUser !== null
    ? users[authedUser].name
    : null

  return {authedUser, userName}
}

export default connect(mapStateToProps)(Nav)
