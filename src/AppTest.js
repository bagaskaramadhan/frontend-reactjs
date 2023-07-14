import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

function Greetings(props) {
  return <p>Hallo {props.name}</p>;
}

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }

  render() {
    return <div>{this.state.time} Detik</div>;
  }
}

class AddNumber extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pos: props.add,
  //     min: props.minus,
  //   };
  // }
  // increase() {
  //   this.setState((state, props) => ({
  //     add: parseInt(state.add) + 1,
  //   }));
  // }
  render() {
    return (
      <div>
        <button>-</button>
        <p>0</p>
        <button>+</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greetings name="bagas" />
        <Timer start="0" />
        <AddNumber />
      </header>
    </div>
  );
}

export default App;
