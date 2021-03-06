import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import bgimg from "./bkg.png"
// NativeBase Components
import {
  Text,
  Button,
  Form,
  Input,
  Item,
  Content,
  Header,
  Container,
  List,
  ListItem,
  Body,
  Label
} from "native-base";

import { View, ImageBackground } from "react-native";

import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  // changeHandler = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleChange = keyValue => {
    this.setState(keyValue);
  };

  // submitHandler = e => {
  //   e.preventDefault();

  //   this.props.login(this.state, this.props.history);
  // };

  // componentDidMount() {
  //   //main();
  //   this.props.fetchChannels();
  // }

  render() {
    // const type = this.props.match.url.substring(1);

    if (this.props.user) {
      return this.props.navigation.navigate("ChannelScreen");
    }

    const errors = this.props.errors;

    return (
      <Content style={{ backgroundColor: "black" }}
      >
        {/* <ImageBackground source={bgimg}> */}
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Text>Login Form</Text>
              <Form>
                {!!errors.length && (
                  <View className="alert alert-danger" role="alert">
                    {errors.map(error => (
                      <Text key={error}>{error}</Text>
                    ))}
                  </View>
                )}
                <Body>
                  <Label style={{ color: "white" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="username"
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "white" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    placeholder="password"

                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            style={{ backgroundColor: "#003cc7" }}

            onPress={() => this.props.login(this.state, this.props.navigation)}
          >
            <Text>Login</Text>
          </Button>

          <Text
            style={{ color: "white" }}

          >
            Dont't have an account? Signup
          </Text>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>



        {/* </ImageBackground> */}
      </Content>
    );
  }
}

const mapStateToProps = state => {
  return {
    errors: state.errors.errors,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, navigation) =>
      dispatch(actionCreators.signup(userData, navigation)),
    login: (userData, navigation) =>
      dispatch(actionCreators.login(userData, navigation)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginForm)
);
