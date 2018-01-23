import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="site-content the-grid has-text-centered">
        <h1 className="title">React Bitget</h1>

        <p>Search for all of your favorite games!</p>
        <img
          src="http://www.8bitdaily.com/wp-content/uploads/2017/01/8bitgaming-e1485276617369.jpg"
          alt="Home Page"
        />
      </div>
    );
  }
}

export default Home;
