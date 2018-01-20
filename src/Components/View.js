import React from "react";
import Rating from "./Rating";
import api from "../utils/api";

class View extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      game: ""
    };

    this.getDate = this.getDate.bind(this);
    this.zoomIn = this.zoomIn.bind(this);
    this.websiteIcon = this.websiteIcon.bind(this);
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

  zoomIn(shot) {
    let blocker = document.querySelector("#screenshot-zoom");
    let imgPop = document.querySelector("#image-pop");
    blocker.style.display = "block";
    imgPop.src = `https://images.igdb.com/igdb/image/upload/t_screenshot_med/${
      shot.cloudinary_id
    }`;
  }

  close() {
    let blocker = document.querySelector("#screenshot-zoom");
    blocker.style.display = "none";
  }

  websiteIcon(site) {
    switch (site.category) {
      case (1, 2):
        return (
          <a key={site.category} href={site.url}>
            <i className="fas fa-external-link-alt fa-2x" />
          </a>
        );
        break;
      case 3:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-wikipedia-w fa-2x" />
          </a>
        );
        break;
      case 4:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-facebook fa-2x" />
          </a>
        );
        break;
      case 5:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-twitter-square fa-2x" />
          </a>
        );
        break;
      case 6:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-twitch fa-2x" />
          </a>
        );
        break;
      case 8:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-instagram fa-2x" />
          </a>
        );
        break;
      case 9:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-youtube-square fa-2x" />
          </a>
        );
        break;
      case 10:
        return (
          <a key={site.category} href={site.url}>
            <i className="fas fa-mobile fa-2x" />
          </a>
        );
        break;
      case 11:
        return (
          <a key={site.category} href={site.url}>
            <i className="fas fa-tablet fa-2x" />
          </a>
        );
        break;
      case 12:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-android fa-2x" />
          </a>
        );
        break;
      case 13:
        return (
          <a key={site.category} href={site.url}>
            <i className="fab fa-steam-square fa-2x" />
          </a>
        );
        break;
      default:
        console.log("others");
        break;
    }
  }

  render() {
    console.log(this.state);
    return (
      <section>
        <div>
          {this.state.game.length === 0 ? (
            <div className="input-field">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="container">
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
                      <div className="website-icons">
                        {this.state.game.websites.map((site, index) => {
                          {
                            return this.websiteIcon(site);
                          }
                        })}
                      </div>
                    ) : (
                      <div>
                        <p>No</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {this.state.game.screenshots ? (
                <section className="container">
                  <div className="columns is-multiline">
                    {this.state.game.screenshots.map((shot, index) => {
                      return (
                        <div
                          key={index}
                          className="column is-one-quarter screenshots"
                        >
                          <img
                            id="single-shot"
                            src={`//images.igdb.com/igdb/image/upload/t_screenshot_med/${
                              shot.cloudinary_id
                            }`}
                            alt="Screenshot"
                            onClick={() => this.zoomIn(shot)}
                          />
                          <div id="screenshot-zoom" className="zoomBlock">
                            <span
                              onClick={() => this.close()}
                              className="close"
                            >
                              &times;
                            </span>
                            <img
                              className="zoom-content"
                              id="image-pop"
                              alt="Screenshot"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
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
