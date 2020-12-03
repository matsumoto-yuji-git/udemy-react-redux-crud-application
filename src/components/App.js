import React, { Component } from 'react';

/*
function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">BAR</label>
      <input type="text" onChange={() => {console.log("I am clicked.")}} />
    </React.Fragment>
  )
}
*/
/* JSX -> JavaScript
function App() {
  return React.createElement(
    "div",
    null,
    "Hello,World!",
  );
}
*/

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1 })
  }

  render() {
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
