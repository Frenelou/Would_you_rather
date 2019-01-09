import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Homepage'
import NotFound from './NotFound'
import Login from './Login'
import Nav from './Nav'
import Leaderboard from './Leaderboard'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'
import QuestionDetails from './QuestionDetails'
import NewQuestion from './NewQuestion'
import '../css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (<Router>
      <Fragment>
        <LoadingBar/>

        <div className="App">
          {
            this.props.loading === true
              ? <Login/>
              : <Fragment>
                  <Nav/>
                  <Switch>
                    <Route path='/Would_you_rather' exact={true} component={Homepage}/>
                    <Route path='/' exact={true} component={Homepage}/>
                    <Route path={process.env.PUBLIC_URL + '/leaderboard'} exact={true} component={Leaderboard}/>
                    <Route path={process.env.PUBLIC_URL + '/question/:id'} component={QuestionDetails}/>
                    <Route path={process.env.PUBLIC_URL + '/new'} component={NewQuestion}/>
                    <Route path={process.env.PUBLIC_URL + '/leaderboard'} component={Leaderboard}/>
                    <Route component={NotFound}/>
                  </Switch>
                </Fragment>
          }
        </div>
      </Fragment>
    </Router>);
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
