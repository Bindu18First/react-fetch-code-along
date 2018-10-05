import React, { Component } from "react";

class componentName extends Component {
  constructor() {
    super();
    this.state = {
      key: []
    };
  }
  async componentDidMount() {
    const response = await fetch("https://node-hnapi.herokuapp.com/news");
    const articles = await response.json();
    this.setState({
      key: articles
    });
  }

  render() {
    console.log(this.state.key);
    return (
      <div>
        {this.state.key.map((eachArticle, index) => {
          return (
            <div className="wrapper" key={index}>
              <h3 id="title">{eachArticle.title}</h3>
              <p>Time-ago:{eachArticle.time_ago} Time:{eachArticle.time}</p>
              <a href={eachArticle.url}>Link:</a>
              <br></br>
              Points:<button disabled="disabled">{eachArticle.points}</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default componentName;
