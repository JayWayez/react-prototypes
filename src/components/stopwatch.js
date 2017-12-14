import React, { Component } from "react";

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    console.log(props.name);
    this.state = {
      status: "stopped",
      start: null,
      elapsed: 0
    };
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.update = this.update.bind(this);
  }

  start() {
    this.setState({
      status: "running",
      start: new Date().getTime()
    });
    setTimeout(this.update, 10);
    console.log("status: running");
  }

  stop() {
    this.setState({
      status: "stopped"
    });
    console.log("status: stopped");    
  }

  update() {
    const { status, start } = this.state;
    if (status === "running") {
      this.setState({
        elapsed: new Date().getTime() - start
      });
      setTimeout(this.update, 10);
    }
  }

  render() {
    const { elapsed, status } = this.state;
    // console.log(this.props.name);
    // console.log(this.state.status);
    return (
      <div>
        <h1>{elapsed} </h1>
        <p>{status}</p>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default Stopwatch;
