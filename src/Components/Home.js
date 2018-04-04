import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="site-content the-grid has-text-centered">
        <h1 className="title">React Bitget</h1>

        <p>Search for all of your favorite games!</p>
        <img
          src="https://cdn.arstechnica.net/wp-content/uploads/2018/01/consoles-800x491.jpg"
          alt="Home Page"
        />
      </div>
    );
  }
}

export default Home;
