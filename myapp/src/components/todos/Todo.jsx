import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class TodoApp extends Component {
  render() {
    return (
      <div className="todoApp">
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <Route path="/welcome/:providedUserName" component={Welcome} />
              <Route component={ErrorMessage} />
            </Switch>
          </>
        </Router>
      </div>
    )
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : "Zhongtao",
      password : "yzt",
      validLogin : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  render() {
    return (
      <div>
        {this.state.validLogin && <div>Valid login</div>}
        {!this.state.validLogin && <div>Invalid login</div>}
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      <button onClick={this.isLoggedIn}>
        Login
      </button>
      </div>
    )
  }

  isLoggedIn() {
    if (this.state.username === "Zhongtao" && this.state.password === "yzt") {
      this.props.history.push(`/welcome/${this.state.username}`)
    } else {
      console.log("Invalid user")
      this.setState({validLogin : false})
    }
  }

  // more generic way to handle change in the field
  handleChange(event) {
    console.log(event.target.name + " : " + event.target.value)
    this.setState(
      {
        [event.target.name] : event.target.value
      }
    )
  }
}

class Welcome extends Component {
  render() {
    return (
      <div>Welcome {this.props.match.params.providedUserName}</div>
    )
  }
}

function ErrorMessage() {
  return <div>An Error Occurred: Invalid path</div>
}
export default TodoApp
