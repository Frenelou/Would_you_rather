import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class HomePage extends Component {
  state = {
    toggle: 'unanswered'
  }
  toggleQuestions = (e) => {
    const toggle = e.target.id

    this.setState(() => ({toggle}))
  }
  render() {
    const {authedUser, questionsId, questions} = this.props
    const answered = questionsId.filter(q => {
      return questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)
    })
    const unanswered = questionsId.filter(q => {
      return !questions[q].optionOne.votes.includes(authedUser) || !questions[q].optionTwo.votes.includes(authedUser)
    })
    return (<div className="question-toggle">
      <h1>HomePage</h1>
      <section>
        <button className="toggle-button selected" id="unanswered" onClick={this.toggleQuestions}>Unanswered Questions </button>
        <button className="toggle-button" id="answered" onClick={this.toggleQuestions}>Answered Questions </button>
      </section>
      <section>
        <ul className="question-list">
          {this.state.toggle === 'answered' && (answered.map((id) => (<Question key={id} id={id}/>)))}
          {this.state.toggle === 'unanswered' && (unanswered.map((id) => (<Question key={id} id={id}/>)))}
        </ul>
      </section>
    </div>)
  }
}

function mapStateToProps({authedUser, questions}) {
  return {questionsId: Object.keys(questions), questions, authedUser}
}

export default connect(mapStateToProps)(HomePage)
