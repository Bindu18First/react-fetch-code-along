import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      carparks: []
    };
  }
  async componentDidMount() {
    const response = await fetch("http://carparks-sg.herokuapp.com/api");
    const data = await response.json();
    this.setState({
      carparks: data
    });
    console.log(data);
  }
  render() {
    return this.state.carparks.map((eachCarpark, index) => {
      return (
      <div id="class_div">
        <h1 key={index}>{eachCarpark.Development}</h1>
      </div>
      )
    });
  }
}

export default App;
