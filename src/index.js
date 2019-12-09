import React from "react";
import ReactDOM from "react-dom";
import { CardList } from "./components/card-list/card-list.component";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div>
        <CardList name="Rohan">
          <h1>Rohan</h1>
        </CardList>
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
