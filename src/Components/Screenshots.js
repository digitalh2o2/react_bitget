import React from "react";

class Screenshots extends React.Component {
  constructor(props) {
    super(props);

    this.zoomIn = this.zoomIn.bind(this);
    this.close = this.close.bind(this);
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
  render() {
    console.log(this.props);
    return (
      <section className="container">
        <div className="columns is-multiline">
          {this.props.game.screenshots.map((shot, index) => {
            return (
              <div key={index} className="column is-one-quarter screenshots">
                <img
                  id="single-shot"
                  src={`//images.igdb.com/igdb/image/upload/t_screenshot_med/${
                    shot.cloudinary_id
                  }`}
                  alt="Screenshot"
                  onClick={() => this.zoomIn(shot)}
                />
                <div id="screenshot-zoom" className="zoomBlock">
                  <span onClick={() => this.close()} className="close">
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
    );
  }
}

export default Screenshots;
