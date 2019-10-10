
///Anfal: This page needs testing!!!!!!! 


import React from "react";
import moment from "moment";
import { View } from "react-native";
import proimg from "./profile2.png"

// NativeBase Components
import { Container, Header, Thumbnail, Text, Content, Card, CardItem, Left } from "native-base";

const Messages = props => {

  return (


    <Content style={{ backgroundColor: "black" }}
    >
      <Card style={{ width: 400 }}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{ uri: "https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png" }} //style={styles.thumbnail}
            />
            <Text style={{ paddingLeft: 5, fontWeight: "bold" }}>
              {props.messages.username}
            </Text>
          </Left>
          <Text> {moment(props.messages.timestamp).calendar()}</Text>
        </CardItem>
        <Text style={{ paddingLeft: 35 }}>{props.messages.message}</Text>
      </Card>
    </Content>
  )
}


export default Messages;
