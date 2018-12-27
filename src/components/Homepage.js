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
    const {authedUser, questions} = this.props

    const answered = questions.filter((q) => {return q.optionOne.votes.includes(authedUser) || q.optionTwo.votes.includes(authedUser)})
    const unanswered = questions.filter((q) => {return !q.optionOne.votes.includes(authedUser) || !q.optionTwo.votes.includes(authedUser)})

    return (<div className="question-toggle">

      <h1>HomePage</h1>
      <section>
        <button className="toggle-button selected" id="unanswered" onClick={this.toggleQuestions}>Unanswered Questions
        </button>
        <button className="toggle-button" id="answered" onClick={this.toggleQuestions}>Answered Questions
        </button>
      </section>
      <section>
        <ul className="question-list">
          {this.state.toggle === 'answered' && (answered.map((q) => (<Question key={q.id} id={q.id}/>)))}
          {this.state.toggle === 'unanswered' && (unanswered.map((q) => (<Question key={q.id} id={q.id}/>)))}
        </ul>
      </section>
    </div>)
  }
}

function mapStateToProps({authedUser, questions}) {

  return {
    questions: Object.keys(questions).map((k) => questions[k]).sort((a, b,) => b.timestamp - a.timestamp),
    authedUser
  }
}

export default connect(mapStateToProps)(HomePage)
