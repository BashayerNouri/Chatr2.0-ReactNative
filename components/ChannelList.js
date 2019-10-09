import React, { Component } from "react";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

//NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import { View } from "react-native";

//Components
import ChannelRow from "./ChannelRow";

class ChannelList extends Component {
  componentDidMount() {
    //main();
    this.props.fetchChannels();
  }

  state = {
    name: "" //channel name
  };

  render() {
    const channelRows = this.props.channels.map(channel => (
      <ChannelRow key={channel.name} channel={channel} />
    ));

    return (
      <View>
        <Header>
          <Title>Channels List</Title>

          <Button transparent>
            <Icon name="pluscircleo" type="AntDesign" />
          </Button>
        </Header>

        {channelRows}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.rootChannels.channels
    //filteredChannels: state.rootChannels.filteredChannels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannelDetail: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID)),
    fetchChannels: () => dispatch(actionCreators.fetchChannels()),
    postChannel: (newChannelName, resetForm) =>
      dispatch(actionCreators.postChannel(newChannelName, resetForm))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelList);
