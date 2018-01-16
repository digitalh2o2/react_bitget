import React from "react";
import { Link } from "react-router-dom";

class Games extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <section>
        <div className="container has-text-centered the-grid">
          <div className="columns is-multiline">
            {games.map((game, index) => {
              return (
                <div key={index} className="column is-one-quarter">
                  <Link to="/hi">
                    <h2>{game.name}</h2>
                  </Link>
                  {!game.cover ? (
                    <p>No image</p>
                  ) : (
                    <img src={game.cover.url} alt={game.name} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Games;
