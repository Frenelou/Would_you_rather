import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {saveAnswer} from '../actions/questions'

class QuestionDetails extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  updateCategory = (e) => {
    if (e.target.checked) {
      console.log(e.target.value)
    }
    const val = e.target.value
    this.setState(() => ({selectedOption: val}))
  }
  chooseOption = (e) => {
    e.preventDefault()
    const {dispatch, authedUser, id} = this.props
    const {answer} = this.state
    // dispatch(saveAnswer({authedUser, id, answer}))
  }

  render() {
    const {answered, users, question} = this.props
    const {author, optionOne, optionTwo, id} = question

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
            <h4>Would you rather</h4>
            <form>
              <label>
                <input type="radio" name="options" value='optionOne' checked={this.state.selectedOption === "optionOne"} onChange={this.updateCategory}/> {optionOne.text}
              </label>
              <br/>
              <label>
                <input type="radio" name="options" value='optionTwo' checked={this.state.selectedOption === "optionTwo"} onChange={this.updateCategory}/> {optionTwo.text}
              </label>
              <button type="sumbit" onClick={this.chooseOption}>Submit</button>
            </form>

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

  console.log(id);
  const question = questions[id]
  const answered = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)
    ? true
    : false
  console.log(answered);
  return {question: question, users, answered, id}
}

export default connect(mapStateToProps)(QuestionDetails)
