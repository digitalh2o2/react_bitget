import React from "react";

class Search extends React.Component {
  render() {
    const { onSubmit, value, onChange, children } = this.props;
    return (
      <section>
        <form onSubmit={onSubmit} className="input-field">
          <div className="field has-addons">
            <div className="control ">
              <input
                type="text"
                className="input"
                value={value}
                onChange={onChange}
                placeholder="Search For A Game"
              />
            </div>
            <div className="control">
              <a className="button is-info">{children}</a>
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Search;
