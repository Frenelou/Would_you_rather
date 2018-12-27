import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './Homepage'
import NotFound from './NotFound'
import Login from './Login'
import Nav from './Nav'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared.js'
import LoadingBar from 'react-redux-loading'
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
                    <Route path='/' exact="exact" component={Homepage}/>
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
