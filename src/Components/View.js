import React from "react";
import api from "../utils/api";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: ""
    };
  }

  componentDidMount() {
    const id = this.props.location.params;
    const { game } = this.state.game;
    api
      .singleGame(id)
      .then(res => res.json())
      .then(res => {
        this.setState({ game: res[0] });
      });
  }

  render() {
    return (
      <div>
        {this.state.game === undefined ? (
          <div className="container">Loading...</div>
        ) : (
          <div className="container">{this.state.game.name}</div>
        )}
      </div>
    );
  }
}

export default View;
