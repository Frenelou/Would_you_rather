import React, { Component }  from 'react'
import {connect} from 'react-redux'

class HomePage extends Component{
  render() {
    return (<div>HomePage</div>)
  }
}

function mapStateToProps({users}) {
  return {
    users: Object.keys(users).sort((a, b) => users[b].questions.length - users[a].questions.length)
  }
}

export default connect(mapStateToProps)(HomePage)
// export default HomePage
