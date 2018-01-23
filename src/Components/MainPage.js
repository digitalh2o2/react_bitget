import React from "react";
import Search from "./Search";
import Games from "./Games";
import api from "../utils/api";

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

  componentDidMount() {
    api
      .loadUp(DEFAULT_QUERY)
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
