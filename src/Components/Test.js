import React from "react";
import Search from "./Search";

var proxyUrl = "https://cors-anywhere.herokuapp.com/";
const DEFAULT_QUERY = "megaman";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSubmit(e) {
    const { searchTerm } = this.state;
    this.setState({ searchTerm: searchTerm });
    fetch(
      proxyUrl +
        `https://api-2445582011268.apicast.io/games/?search=${searchTerm}&fields=name,cover`,
      {
        method: "GET",
        headers: {
          "user-key": "6e6712c1c94feb2bc74251324d8184db",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
    e.preventDefault();
  }

  componentWillMount() {
    fetch(
      proxyUrl +
        `https://api-2445582011268.apicast.io/games/?search=${DEFAULT_QUERY}&fields=name,cover`,
      {
        method: "GET",
        headers: {
          "user-key": "6e6712c1c94feb2bc74251324d8184db",
          Accept: "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(resData => {
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { searchTerm } = this.props;
    return (
      <section>
        <div className="container">
          <Search
            value={searchTerm}
            onChange={this.onSearch}
            onSubmit={this.onSubmit}
          >
            Search
          </Search>
        </div>
      </section>
    );
  }
}

export default Test;
