import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question) {
  return {type: ADD_QUESTION, question}
}

function newQuestion(question) {
  return {type: SAVE_QUESTION_ANSWER, question}
}
export function handleAddQuestion(optionOneText, optionTwoText) {
  return(dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading)

    return saveQuestion({optionOneText, optionTwoText, author: authedUser}).then((question) => dispatch(addQuestion(question))).then(() => dispatch(dispatch(hideLoading)))
  }
}
export function handleSaveQuestion(authedUser, qid, answer) {
  return(dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading)

    return saveQuestionAnswer({authedUser, qid, answer}).then((question) => dispatch(newQuestion({authedUser, qid, answer}))).then(() => dispatch(dispatch(hideLoading)))
  }
}
export function receiveQuestions(questions) {
  return {type: RECEIVE_QUESTIONS, questions}
}
