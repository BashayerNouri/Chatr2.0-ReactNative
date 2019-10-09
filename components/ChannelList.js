import React, { Component } from "react";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

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
  Container
} from "native-base";
import { View } from "react-native";

//Components
import ChannelRow from "./ChannelRow";

class ChannelList extends Component {
  // componentDidMount() {
  //   //main();
  //   this.props.fetchChannels();
  // }

  state = {
    name: "" //channel name
  };

  render() {
    const channelRows = this.props.channels.map(channel => {
      return <ChannelRow channel={channel} />;
    });

    // const channelRows = this.props.channels.map(channel => {
    //   console.log(channel);

    //   return <Text onPress={() => alert("hi")}>{channel.name}</Text>;
    // });

    return (
      <Container>
        <Header>
          <Title>Channels List</Title>

          <Button transparent>
            <Icon name="pluscircleo" type="AntDesign" />
          </Button>
        </Header>
        <View>{channelRows}</View>
      </Container>
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
