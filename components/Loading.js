import React, { Component } from "react";
import { Container, Header, Thumbnail, Text, Icon } from "native-base";
import { Image, View } from "react-native";

import myloading from "./lg.ajax-spinner-gif.gif"

class Loading extends Component {
  render() {
    return (
      <Container>
        {/* <img src={myloading}></img> */}
        {/* <FontAwesomeIcon icon={faSpinner} spin size="4x" /> */}
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={myloading}
          />

        </View>
      </Container>
    );
  }
}

export default Loading;
