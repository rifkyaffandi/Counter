import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Counter nama="Pilkada" />
        <Counter nama="Liverpool" />
        <Counter nama="Barca" />
        <Counter nama="Chelsea" />
      </div>
    );
  }
}

export default App;

// class Header extends Component {
//   render() {
//     return ;
//   }
// }

class Counter extends Component {
  state = {
    number: 0
  };

  naik = () => {
    console.log("naik");
    this.setState({
      number: this.state.number + 1
    });
  };

  turun = () => {
    console.log("turun");
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h1>{this.state.number}</h1>
        <button onClick={this.naik}>naik</button>
        <button onClick={this.turun}>turun</button>
      </div>
    );
  }
}
