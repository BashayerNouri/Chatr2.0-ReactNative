import React, { Component } from "react";


import * as actionCreators from "../redux/actions";

class SearchChannelBar extends Component {
  state = { query: "" };

  handleChange = event => {
    this.setState({ query: event.target.value });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <div

      >
        <div className="input-group my-3 ">
          <input
            className="form-control rounded-pill"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search Channel..."
          />
          <div className="input-group-append">
            <span className="input-group-text ml-2 rounded-pill">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchChannelBar;
