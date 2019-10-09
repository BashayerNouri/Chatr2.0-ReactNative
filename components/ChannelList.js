import React, { Component } from "react";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

//NativeBase Components
//NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Header,
  Title,
  Container,
  List,
  Content,
  Item,
  Input
} from "native-base";
import { View } from "react-native";


//Components
import ChannelRow from "./ChannelRow";
import Searchbar from "./Navigation/SearchBar";

class ChannelList extends Component {
  // componentDidMount() {
  //   //main();
  //   this.props.fetchChannels();
  // }

  state = {
    name: "" //channel name
  };

  render() {
    const channelRows = this.props.filteredChannels.map(channel => (

      <ChannelRow key={channel.name} channel={channel} />

    ));

    return (
      <Content style={{ backgroundColor: "black" }}>

        <Searchbar />

        <List>{channelRows}</List>
      </Content>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.rootChannels.channels,
    filteredChannels: state.rootChannels.filteredChannels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannelDetail: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID)),
    fetchChannels: () => dispatch(actionCreators.fetchChannels()),
    postChannel: (newChannelName, resetForm) =>
      dispatch(actionCreators.postChannel(newChannelName, resetForm)),

    filterChannels: query => dispatch(actionCreators.filterChannels(query))

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
