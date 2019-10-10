import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";
import { withNavigation } from "react-navigation";

//NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Thumbnail,
  CardItem,
  Card,
  Container,
  Item
} from "native-base";
import { View } from "react-native";
import { withNavigation } from "react-navigation";

class ChannelRow extends Component {
  render() {
    const { channel } = this.props;
    return (
      <ListItem button
        style={{ backgroundColor: "black" }}
        onPress={() =>
          this.props.navigation.navigate("ChatScreen", {
            channelID: channel.id
          })
        }
      >



        < Left >
          <Thumbnail
            source={{ uri: channel.image_url }} //style={styles.thumbnail}
          />
          <Text style={{
            color: "#8ae6ff", fontSize: 18,
            fontWeight: "bold",
          }}>   {channel.name}</Text>
        </Left>

      </ListItem>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannelDetail: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID))
  };
};

export default withNavigation(connect(mapDispatchToProps)(ChannelRow));

