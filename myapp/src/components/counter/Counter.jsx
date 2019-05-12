import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count : 0
    }

    this.increment = this.increment.bind(this)
  }

  render = () => {
    return (
      <div className="counter">
        <CounterButton incrementBy={1} incrementMethod={this.increment}/>
        <CounterButton incrementBy={5} incrementMethod={this.increment}/>
        <CounterButton incrementBy={10} incrementMethod={this.increment}/>
        <span className="count1">
          {this.state.count}
        </span>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }

  increment(incrementBy) {
    console.log(`increment by - ${incrementBy}`)
    this.setState(
      (prevState) => {
        return {count : prevState.count + incrementBy}
      }
    )
  }

  reset = () => {
    this.setState({count : 0})
  }
}

class CounterButton extends Component {
    constructor() {
    super()
    this.state = {
      count : 0
    }
  }
  render = () => {
    return (
      <div className="counterButton">
      <button className="redButton" onClick={this.increment}>+{this.props.incrementBy}</button>
      <button onClick={() => {this.props.incrementMethod(-this.props.incrementBy)}}>-{this.props.incrementBy}</button>
      {/*<span className="count1">
        {this.state.count}
      </span>*/}
      </div>
    )
  }

  increment = () => {
    this.setState(
      (prevState) => {
        return {count : prevState.count + this.props.incrementBy}
      }
    )
    this.props.incrementMethod(this.props.incrementBy)
  }

  decrement = () => {
    this.setState(
      (prevState) => {
        return {count : prevState.count - this.props.incrementBy}
      }
    )
    this.props.incrementMethod(-this.props.incrementBy)
  }
}

CounterButton.defaultProps = {
  incrementBy : 1
}

CounterButton.propTypes = {
  incrementBy : PropTypes.number
}

export default Counter
