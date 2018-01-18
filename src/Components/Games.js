import React from "react";
import { Link } from "react-router-dom";

class Games extends React.Component {
  render() {
    console.log(this.props);
    const { games, match } = this.props;
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
                          <Link
                            to={{
                              pathname: `${match.url}/${game.slug}`,
                              params: game.id
                            }}
                          >
                            <p>
                              <strong>{game.name}</strong>
                            </p>
                          </Link>
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
                          <Link
                            to={{
                              pathname: `${match.url}/${game.name}`,
                              params: game.id
                            }}
                          >
                            <p>
                              <strong>{game.name}</strong>
                            </p>
                          </Link>
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
