import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import * as actionCreators from "../../redux/actions/";
import { Item, Input, Container } from "native-base";

import { SearchBar } from "react-native-elements";


class Searchbar extends Component {


  state = {
    searchQuery: ""
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
    console.log(" in searchbar searchQuery: query ", query)
    this.props.filterChannels(query);
  };

  render() {

    const query = this.state.searchQuery;

    return (

      <SearchBar
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search Channels..."
        onChangeText={this.handleSearch}
        value={query}
      />
    );
  }
}
//   state = {
//     query: "",

//   };

//   handleChange = keyValue => {
//     this.setState(keyValue);
//     this.props.filterChannels(this.state)
//   };
//   render() {
//     const { query } = this.state.query;

//     return (
//       <Item>

//         <Input

//           value={query}
//           placeholder="Search Channels..."
//           onChangeText={query => { this.handleChange({ query: query }) }} />

//       </Item>




//     );
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
    filterChannels: query => dispatch(actionCreators.filterChannels(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Searchbar);
