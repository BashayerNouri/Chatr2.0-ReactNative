import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannelDetail, sendMessage, setLoading } from "../redux/actions";
import Messages from "./Messages";
// import SearchChannelBar from "./SearchChannelBar";
import Loading from "./Loading";

import { withNavigation } from "react-navigation";

import {
  Container,
  Header,
  Thumbnail,
  Text,
  Icon,
  Content,
  Form,
  Item,
  Input,
  Button,
  List
} from "native-base";
import { View } from "react-native";

class ChannelDetail extends Component {
  state = {
    filteredMessages: [],
    searchIsUsed: false,
    message: ""
  };

  //used to reset the form
  resetForm = () =>
    this.setState({
      message: ""
    });
  filterMessages = query => {
    const channel = this.props.channel;
    query = query.toLowerCase();

    let filteredMessages = channel.filter(messageItem =>
      `${messageItem.message} ${messageItem.username} `
        .toLowerCase()
        .includes(query)
    );
    this.setState({
      filteredMessages: filteredMessages,
      searchIsUsed: true
    });
  };

  componentDidMount() {
    const channelID = this.props.navigation.getParam("channelID");

    // // const timeStamp = this.props.match.params.channelID.latest;
    // this.props.changeLoading();
    // this.props.fetchChannelDetail(channelID);

    // // this.interval = setInterval(
    // //   () => {
    // //     if (channelID !== undefined) {
    // //       this.props.fetchChannelDetail(channelID);
    // //     }
    // //   },
    // //   5000      // timeStamp
    // // );
    this.props.changeLoading();

    this.interval = setInterval(
      () => {
        if (channelID !== undefined) {
          this.props.fetchChannelDetail(channelID);
        }
      },
      1000
      // timeStamp
    );
  }

  componentDidUpdate(prevProps) {
    const channelID = this.props.navigation.getParam("channelID");

    // if (channelID !== undefined) {
    //   if (channelID !== prevProps.channelID) {
    //     this.props.changeLoading();
    //     this.props.fetchChannelDetail(channelID);
    //   } else {
    //     this.props.fetchChannelDetail(channelID);

    //     // clearInterval(this.interval);
    //     // this.interval = setInterval(() => {
    //     //   this.props.fetchChannelDetail(channelID);
    //     // }, 1000); f
    //   }
    if (channelID !== undefined) {
      if (channelID == prevProps.channelID) {
        this.props.changeLoading();
        this.props.fetchChannelDetail(channelID);
      } else {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
          this.props.fetchChannelDetail(channelID);
        }, 1000);
      }
    }
  }

  // if (this.props.match.params.channelID !== undefined) {
  //   if (
  //     this.props.match.params.channelID !== prevProps.match.params.channelID
  //   ) {
  //     this.props.changeLoading();
  //     this.props.fetchChannelDetail(this.props.match.params.channelID);
  //   } else {
  //     clearInterval(this.interval);
  //     this.interval = setInterval(() => {
  //       this.props.fetchChannelDetail(this.props.match.params.channelID);
  //     }, 1000);
  //   }
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  //added this for the native form format
  handleChange = keyValue => {
    this.setState(keyValue);
  };
  //new
  handleSubmit = () => {
    // alert("Check my code the states are empty");
    const channelID = this.props.navigation.getParam("channelID");

    this.props.sendMessage(
      channelID,
      this.state,
      this.props.user,
      this.resetForm
    );

    this.setState({
      message: ""
    });
  };

  myView = () => {
    const channel = this.props.channel;

    if (!!channel) {
      if (this.state.searchIsUsed) {
        const resultedMessages = this.state.filteredMessages.map(message => (
          <Messages key={message.id} messages={message} />
        ));
        return { resultedMessages };
        {
        }
      } //search is not used
      else {
        const messages = channel.map(message => (
          <Messages key={message.id} messages={message} />
        ));
        return <View>{messages}</View>;
      }
    }
  };

  render() {
    if (this.props.loading) return <Loading />;

    const { message } = this.state.message;

    return (
      <>
        {/* <SearchChannelBar onChangeText={this.filterMessages} /> */}
        <Content>
          <List>{this.myView()}</List>

          <Header />
          <Content>
            <Form>
              <Item>
                <Input
                  name="message"
                  value={message}
                  placeholder="Write your message..."
                  onChangeText={message =>
                    this.handleChange({ message: message })
                  }
                />
              </Item>

              <Button onPress={this.handleSubmit}>
                <Icon name="send-circle" type="MaterialCommunityIcons" />
              </Button>
            </Form>
            <Container></Container>
          </Content>
        </Content>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    channel: state.channel.channel,
    channels: state.rootChannels.channels,
    filteredChannels: state.rootChannels.filteredChannels,
    currentChannel: state.channel.currentChannel,
    loading: state.channel.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (channelID, message, user, resetForm) =>
      dispatch(sendMessage(channelID, message, user, resetForm)),

    fetchChannelDetail: channelID => dispatch(fetchChannelDetail(channelID)),
    changeLoading: () => dispatch(setLoading())
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChannelDetail)
);
