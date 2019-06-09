import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Todos from './Todos.jsx'
import AuthenticatedRoute from '../AuthenticatedRoute.jsx'
import HeaderComponent from '../HeaderComponent.jsx'
import FooterComponent from '../FooterComponent.jsx'
import LoginComponent from '../LoginComponent.jsx'
import LogoutComponent from '../LogoutComponent.jsx'
import Welcome from '../Welcome.jsx'

class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <>
            <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <AuthenticatedRoute path="/welcome/:providedUserName" component={Welcome} />
              <AuthenticatedRoute path="/todos" component={Todos} />
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />
              <Route component={ErrorMessage} />
            </Switch>
            <FooterComponent/>
          </>
        </Router>
      </div>
    )
  }
}


function ErrorMessage() {
  return <div>An Error Occurred: Invalid path</div>
}



export default TodoApp
