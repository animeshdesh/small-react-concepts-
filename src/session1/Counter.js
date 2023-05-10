import React from "react";
import "../styles.css";

// creating a JS-ES6 class
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + this.props.diff
    });
  };
  decrement = () => {
    this.setState((currState) => {
      return {
        count: currState.count - this.props.diff
      };
    });
  };

  render() {
    return (
      <div>
        <h1 className="counter-display"> {this.state.count} </h1>
        <button onClick={this.increment}>+{this.props.diff}</button>
        <button onClick={this.decrement}>-{this.props.diff}</button>
      </div>
    );
  }
}

export default Counter;
