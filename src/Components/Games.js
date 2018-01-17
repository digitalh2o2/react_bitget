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
                <div key={index} className="column is-half pop">
                  {!game.cover ? (
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <p>No image</p>
                        </div>
                        <div className="content">
                          <p>
                            <strong>{game.name}</strong>
                          </p>
                        </div>
                      </article>
                    </div>
                  ) : (
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <img src={game.cover.url} alt={game.name} />
                        </div>
                        <div className="content">
                          <p>
                            <strong>{game.name}</strong>
                          </p>
                        </div>
                      </article>
                    </div>
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
