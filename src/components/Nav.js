import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
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
        <li className="logout">
          <button onClick={this.setUser}>Log out</button>
        </li>
        <li><span>Hello, {this.props.userName}!</span></li>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leaderboard
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

export default withRouter(connect(mapStateToProps)(Nav))
