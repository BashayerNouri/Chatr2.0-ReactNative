import { React, Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions";

//NativeBase Components
import {
  Text,
  Left,
  Body,
  Right,
  Button,
  ListItem,
  Icon,
  Container
} from "native-base";
import { View } from "react-native";

class ChannelRow extends Component {
  render() {
    const channel = this.props.channel;
    return (
      <Container>
        <ListItem button>
          {/* <Card style={styles.transparent}>
            <CardItem style={styles.transparent}>
              <Left>
                <Thumbnail
                  source={{ uri: channel.image_url }} //style={styles.thumbnail}
                /> */}
          <Text style={styles.text}>{channel.name}</Text>
          {/* </Left>
            </CardItem>
          </Card> */}
        </ListItem>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannelDetail: channelID =>
      dispatch(actionCreators.fetchChannelDetail(channelID))
  };
};

export default connect(mapDispatchToProps)(ChannelRow);
