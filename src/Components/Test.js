import React from "react";
import Search from "./Search";
import api from "../utils/api";

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
    this.setState({ searchTerm });
    api.getGames(searchTerm);
    e.preventDefault();
  }

  componentDidMount() {
    api.loadUp(DEFAULT_QUERY);
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
