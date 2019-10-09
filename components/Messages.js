
///Anfal: This page needs testing!!!!!!! 


import React from "react";
import moment from "moment";
import { View } from "react-native";

// NativeBase Components
import { Container, Header, Thumbnail, Text } from "native-base";

const Messages = props => {

  return (
    <Container>
      <View >
        <Thumbnail
          source={{ uri: "https://i.ibb.co/nQTNZF6/profile.png" }}
        />


        <Text>{props.messages.username}</Text>

        <Text>{props.messages.message}</Text>

        <Text> {moment(props.messages.timestamp).calendar()}</Text>

      </View>

    </Container>


  );
};

export default Messages;
