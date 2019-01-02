import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

class User extends Component {
  setUser = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.props.id))

  }
  render() {
    return (<a href="#user" onClick={this.setUser}>
      <img src={this.props.avatar} alt={`${this.props.name}'s avatar`} className="avatar"/>
      <span className="username">{this.props.name}</span>
    </a>)
  }
}
function mapStateToProps({
  authedUser,
  users
}, {id}) {
  const user = users[id]

  return {authedUser, name: user.name, avatar:user.avatarURL}
}

export default withRouter(connect(mapStateToProps)(User))
