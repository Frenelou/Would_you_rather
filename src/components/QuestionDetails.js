import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'
import Stats from './Stats'

class QuestionDetails extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  updateCategory = (e) => {
    const val = e.target.value
    this.setState(() => ({selectedOption: val}))
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {selectedOption} = this.state
    const {authedUser, id, dispatch} = this.props

    dispatch(handleSaveQuestion(authedUser, id, selectedOption))

  }
  render() {
    const {users, question, answered, authedUser} = this.props
    const {author, optionOne, optionTwo} = question
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalOfVotes = optionOneVotes + optionTwoVotes
    const answer = question.optionOne.votes.includes(authedUser)

    return (<div className="question-details">
      <h1>QuestionDetails</h1>
      <div className="question">
        <h3 className="question-header">
          {users[author].name}
          asks
        </h3>
        <div className="question-body">
          <img src={this.props.users[author].avatarURL} alt={`${this.props.users[author].name}'s avatar`} className="avatar"/>
          <hr/>
          <div>
            {
              answered === true && (<Fragment>
                <h3>Results</h3>
                <Stats option={optionOne.text} optionCount={optionOneVotes} totalOfVotes={totalOfVotes} chosen={answer}/>
                <p>{answer}</p>

                <Stats option={optionTwo.text} optionCount={optionTwoVotes} totalOfVotes={totalOfVotes} chosen={!answer}/>
              </Fragment>)
            }
            {
              answered === false && (<Fragment>
                <h3>Would you rather...</h3>
                <form>
                  <label>
                    <input type="radio" name="options" value='optionOne' checked={this.state.selectedOption === "optionOne"} onChange={this.updateCategory}/> {optionOne.text}
                  </label>
                  <label>
                    <input type="radio" name="options" value='optionTwo' checked={this.state.selectedOption === "optionTwo"} onChange={this.updateCategory}/> {optionTwo.text}
                  </label>
                  <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
              </Fragment>)
            }

          </div>
        </div>
      </div>
    </div>)
  }
}
function mapStateToProps({
  users,
  questions,
  authedUser
}, props) {
  const {id} = props.match.params

  console.log('authedUser: ', authedUser);

  const question = questions[id]
  const answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    ? true
    : false
  return {question: question, users, answered, id, authedUser}
}

export default connect(mapStateToProps)(QuestionDetails)
