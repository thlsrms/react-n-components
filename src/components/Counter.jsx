import React, { useState } from 'react';


const Counter = ({ countStart }) => {
  const [counter, setCounter] = useState(countStart ? countStart : 0);

  const handleClick = (func) => {
    switch (func) {
      case 'sumar':
        setCounter(counter + 1);
        break;
      case 'restar':
        setCounter(counter - 1);
        break;
      case 'reset':
        setCounter(0);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={() => handleClick('sumar')}>+1</button>
      <button onClick={() => handleClick('restar')}>-1</button>
      <button onClick={() => handleClick('reset')}>reset</button>
    </div>
  );
}

class newCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.countStart ? this.props.countStart : 0
    }
  }

  handleClick(func) {
    switch (func) {
      case 'sumar':
        this.setState({ counter: this.state.counter + 1 })
        break;
      case 'restar':
        this.setState({ counter: this.state.counter - 1 })
        break;
      case 'reset':
        this.setState({ counter: 0 })
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={() => this.handleClick('sumar')}>+1</button>
        <button onClick={() => this.handleClick('restar')}>-1</button>
        <button onClick={() => this.handleClick('reset')}>reset</button>
      </div>
    );
  }
}

export default Counter;