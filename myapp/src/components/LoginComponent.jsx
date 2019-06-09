import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : "Zhongtao",
      password : "",
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  render() {
    return (
      <div>
          <h1>Login</h1>
          <div className="container">
              {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
              {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
              {this.state.showSuccessMessage && <div>Login Sucessful</div>}
              {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
              User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
              <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
          </div>
      </div>
    )
  }

  loginClicked() {
    if(this.state.username==='Zhongtao' && this.state.password==='yzt'){
        AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        this.props.history.push(`/welcome/${this.state.username}`)
        this.setState({showSuccessMessage:true})
        this.setState({hasLoginFailed:false})
    }
    else {
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
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

export default LoginComponent
