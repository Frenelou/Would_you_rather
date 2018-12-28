import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import User from './User'

class Leaderboard extends Component {
  render() {
    const {users, sortedUsers, usersObj} = this.props

    return (<div className="leaderboard">
      <h1>Leaderboard</h1>
      <section className="leaderboard-list">
        {
          sortedUsers.map((u) => {
            const user = users[u[0]]
            return (<div className="leaderboard-box" key={user.id}>
              <img src={user.avatarURL} alt={`${user.name}'s avatar`} className="avatar"/>
              <hr/>
              <div className="leaderboard-details">
                <h2>{user.name}</h2>
                <p>Answered questions {Object.keys(user.answers).length}</p>
                <hr/>
                <p>Created questions {user.questions.length}</p>
              </div>
              <hr/>
              <div className="leaderboard-score">
                <div className="leaderboard-score-header">Score</div>
                <div className="leaderboard-score-body">
                  {u[1]}
                </div>

              </div>
            </div>)
          })
        }
        </section>
    </div>);
  }
}
function mapStateToProps({authedUser, users}) {
  return {
    authedUser,
    usersId: Object.keys(users),
    users,
    sortedUsers: Object.keys(users).map((k) => users[k]).map((item) => [
      item.id,
      (Object.keys(item.answers).length + item.questions.length)
    ]).sort((a, b,) => b[1] - a[1])
  }
}

export default connect(mapStateToProps)(Leaderboard)
