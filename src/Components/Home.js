import React from "react";
import cover from "../images/cover.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="site-content the-grid has-text-centered">
        <h1 className="title">React Bitget</h1>

        <p>Search for all of your favorite games!</p>
        <img src={cover} alt="Home Page" />
      </div>
    );
  }
}

export default Home;
