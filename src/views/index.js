/**
 * Revised by zhusass on 2017/11/13.
 */

import React from 'react'
import createHistory from 'history/createBrowserHistory'
import {
    BrowserRouter as Router,
    Route,
    withRouter,
} from 'react-router-dom'

import AIndex from './a_index/index'
import Login from './login/index'

const history = createHistory()

class App extends React.Component {
      render () {
          return <div className="app-wrap" style={{width: '100%', height: '100%',}}>
              <Route path="/" exact component={AIndex}/>
              <Route path="/login" exact component={Login}/>
          </div>
      }
}

const WithRouterComponent = withRouter(App)

class NavMenu extends React.Component {
    render() {
        return <Router history={history}>
                  <WithRouterComponent/>
        </Router>
    }
}

export default NavMenu
