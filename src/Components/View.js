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
      <section>
        <div>
          {this.state.game.length === 0 ? (
            <div className="container">
              <p>Loading...</p>
            </div>
          ) : (
            <div className="container">
              <div className="tile is-ancestor">
                <div className="tile is-4 is-vertical is-parent">
                  <div className="tile is-child box">
                    <p className="title">{this.state.game.name}</p>
                    <p>Release Date:</p>
                    <div>
                      {this.getDate(this.state.game.first_release_date)}
                    </div>
                    <p>Rating:</p>
                    <Rating
                      radius={52}
                      stroke={6}
                      progress={this.state.game.rating}
                    />
                  </div>
                  <div className="tile is-child box">
                    <p>Hello</p>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <p className="title">Middle tile</p>
                    <p className="subtitle">With an image</p>
                    <figure>
                      <img
                        src={`//images.igdb.com/igdb/image/upload/t_cover_big/${
                          this.state.game.cover.cloudinary_id
                        }.jpg`}
                        alt="Game Cover"
                      />
                    </figure>
                  </article>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <div className="title">Summary</div>
                    <p>{this.state.game.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default View;
