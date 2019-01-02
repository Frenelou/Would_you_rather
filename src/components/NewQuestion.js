import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'
import {handleAddQuestion} from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome:false
  }
  handleChange = (e) => {
    if (e.target.name === 'optionOne') {
      const optionOne = e.target.value
      this.setState(() => ({optionOne}))
    } else {
      const optionTwo = e.target.value
      this.setState(() => ({optionTwo}))
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {optionOne} = this.state
    const {optionTwo} = this.state

    const {dispatch} = this.props

    dispatch(handleAddQuestion(optionOne,
optionTwo))

    console.log('New question: ', optionOne, optionTwo);
    this.setState(() => ({optionOne, optionTwo, toHome:true}))

  }
  render() {
    const {optionOne, optionTwo, toHome} = this.state

    if (toHome === true) {
      return <Redirect to='/'/>
    } else {
      return (<div className="new-question ">
        <div className="new-question--header">
          <h1>Create new question</h1>
        </div>
        <div className="new-question--body">
          <p>Complete the question</p>
          <h2>Would you rather...</h2>
          <form action="" className="new-question--form">
            <input type="text" placeholder="Enter option one text here" name="optionOne" onChange={this.handleChange} value={optionOne}/>
            <label>OR</label>
            <input type="text" placeholder="Enter option two text here" name="optionTwo" onChange={this.handleChange} value={optionTwo}/><br/>
            <button disabled={optionOne.length === 0 && optionTwo.length === 0} type="Submit" onClick={this.handleSubmit}>Submit</button>

          </form>
        </div>
      </div>)
    }
  }
}

export default connect()(NewQuestion)
