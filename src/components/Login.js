import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import User from './User'

class Login extends Component {
  render() {

    return (<Fragment>
      <h1>Pick a user</h1>
      <ul id="login-box">
        {
          this.props.users.map((id) => (<li key={id}>
            <User id={id}/>
          </li>))}
      </ul>
    </Fragment>);
  }
}
function mapStateToProps({authedUser, users}) {
  return {authedUser, users: Object.keys(users)}
}

export default connect(mapStateToProps)(Login)
