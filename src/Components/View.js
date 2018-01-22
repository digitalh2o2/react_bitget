import React from "react";
import Rating from "./Rating";
import Screenshots from "./Screenshots";
import Websites from "./Websites";
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

    api
      .singleGame(id)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ game: res[0] });
      });
  }

  getDate(num) {
    const d = new Date(num);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return (
      <p>
        {month}-{day}-{year}
      </p>
    );
  }

  render() {
    return (
      <section className="site-content">
        <div>
          {this.state.game.length === 0 ? (
            <div className="input-field the-grid">
              <p>
                <i className="fas fa-spinner fa-spin fa-3x" />
              </p>
            </div>
          ) : (
            <div className="container the-grid">
              <div className="tile is-ancestor">
                <div className="tile is-4 is-vertical is-parent">
                  <div className="tile is-child box">
                    <p className="title">{this.state.game.name}</p>
                    <div className="ratings">
                      <div>
                        <h3 className="subtitle">Release Date:</h3>
                        {this.getDate(this.state.game.first_release_date)}
                      </div>
                      <div>
                        <h3 className="subtitle">Rating:</h3>
                        {!this.state.game.rating ? (
                          <p>No Rating Available</p>
                        ) : (
                          <Rating
                            radius={52}
                            stroke={6}
                            progress={this.state.game.rating}
                            ratings={this.state.game.total_rating_count}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="tile is-child box has-text-centered">
                    {this.state.game.genres ? (
                      <div>
                        <h3 className="subtitle">Genres</h3>
                        {this.state.game.genres.map(genre => {
                          return (
                            <div key={genre.id} className="genres">
                              <p>{genre.name}</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p>No Genre Data Available</p>
                    )}
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info has-text-centered">
                    {this.state.game.cover ? (
                      <figure>
                        <img
                          src={`//images.igdb.com/igdb/image/upload/t_cover_big/${
                            this.state.game.cover.cloudinary_id
                          }.jpg`}
                          alt="Game Cover"
                        />
                      </figure>
                    ) : (
                      <figure>
                        <p>No Image Preview</p>
                      </figure>
                    )}
                  </article>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <div className="title">Summary</div>
                    <p>{this.state.game.summary}</p>
                    <hr />
                    {this.state.game.websites ? (
                      <Websites game={this.state.game} />
                    ) : (
                      <div>
                        <p>No External Websites</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {this.state.game.screenshots ? (
                <Screenshots game={this.state.game} />
              ) : (
                <section className="input-field">
                  <div>
                    <p>No Screenshots Available</p>
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default View;
