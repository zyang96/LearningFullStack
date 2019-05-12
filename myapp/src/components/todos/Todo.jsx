import React, {Component} from 'react'

class TodoApp extends Component {
  render() {
    return (
      <div>
        <LoginComponent />
      </div>
    )
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : "zhongtao",
      password : "yztyztyzt",
      validLogin : false
    }
    this.handleChange = this.handleChange.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  render() {
    return (
      <div>
      <ShowLoginMessage loginStatus={this.state.validLogin} />
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
      <button onClick={this.isLoggedIn}>
        Login
      </button>
      </div>
    )
  }

  isLoggedIn() {
    if (this.state.username === "zhongtao" && this.state.password === "yztyztyzt") {
      this.setState({validLogin : true})
      // console.log("Valid user")
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

function ShowLoginMessage(props) { // this is how props be passed to function components, it doesn't have to be named as props
  if (props.loginStatus) {
    return (
      <div>Valid login</div>
    )
  } else {
    return null
  }
}

export default TodoApp
