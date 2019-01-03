import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

class Question extends Component {

  render() {
    const {question, users} = this.props
    const {author, optionOne, id} = question
    return (<li className="question">
      <h3 className="question-header">
        {users[author].name}
        asks
      </h3>
      <div className="question-body">
        <img src={this.props.users[author].avatarURL} alt={`${this.props.users[author].name}'s avatar`} className="avatar"/>
        <hr/>
        <div>
          <h4>Would you rather</h4>
          <p>...{optionOne.text}...</p>
          <Link to={`question/` + id} activeclassname='active' className="button view-more">View More
          </Link>
        </div>
      </div>
    </li>)
  }
}
function mapStateToProps({
  users,
  questions
}, {id}) {
  const question = questions[id]

  return {question: question, users}
}

export default withRouter(connect(mapStateToProps)(Question))
