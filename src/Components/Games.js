import React from "react";
import { Link } from "react-router-dom";
import noimage from "../images/noimage.png";

class Games extends React.Component {
  render() {
    const { games, match } = this.props;
    return (
      <section className="site-content">
        <div className="container has-text-centered the-grid">
          <div className="columns is-multiline">
            {games.map((game, index) => {
              return (
                <div key={index} className="column is-half pop">
                  {!game.cover ? (
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <img src={noimage} alt="N/A" />
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
