import React from 'react'

const Stats = (props) =>{
  const {option, optionCount,totalOfVotes, chosen} = props
  return (<div className={"question-option " + (
    chosen && 'voted')}>
    {chosen && (
      <div className="voted-tag">Your <br/> vote</div>
    )}
    <p>Would you rather {option}</p>
    <div className="poll-bar">
      <div className="poll-bar--fill" style={{
        'width': optionCount * 100 / totalOfVotes + '%'
      }}></div>
    </div>
    <p>{optionCount} out of {totalOfVotes} votes  </p>
  </div>)
}
export default Stats
