import React from "react";
import Search from "./Search";
import Games from "./Games";
import api from "../utils/api";
import _ from "lodash";
import orderBy from "lodash/orderBy";

const DEFAULT_QUERY = "megaman";

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      games: ""
    };

    this.onSearch = this.onSearch.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
  }

  onSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  onSubmit(e) {
    const { searchTerm } = this.state;
    this.setState({ searchTerm });
    api
      .getGames(searchTerm)
      .then(res => res.json())
      .then(res => {
        this.setState({ games: res });
      });
    e.preventDefault();
  }

  toggleSort(e) {
    const { games } = this.state;
    let value = e.target.value;
    let sorted;
    if (value === "") {
      return games;
    } else if (value === "a") {
      sorted = _.orderBy(games, ["name"], ["asc", "desc"]);
    } else if (value === "z") {
      sorted = _.orderBy(games, ["name"], ["desc", "asc"]);
    }

    this.setState({
      games: sorted
    });
  }

  render() {
    const { searchTerm, games } = this.state;
    const { match } = this.props;
    return (
      <section className="site-content">
        <div className="container">
          <Search
            value={searchTerm}
            onChange={this.onSearch}
            toggleSort={this.toggleSort}
            onSubmit={this.onSubmit}
          >
            Search
          </Search>
        </div>

        {!games ? (
          <section className="input-field">
            <p />
          </section>
        ) : (
          <section>
            <div>
              <Games games={games} match={match} />
            </div>
          </section>
        )}
      </section>
    );
  }
}

export default MainPage;
