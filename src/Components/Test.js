import React from "react";

var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const DEFAULT_QUERY = "megaman";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    fetch(proxyUrl + "https://api-2445582011268.apicast.io/games/?search=Halo", {
      method: "GET",
      headers: {
        'user-key': "6e6712c1c94feb2bc74251324d8184db",
        Accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>Hi</p>
      </div>
    );
  }
}

export default Test;
