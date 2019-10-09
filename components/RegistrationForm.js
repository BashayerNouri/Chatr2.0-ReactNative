import React, { Component } from "react";

// NativeBase Components
import { Text, Button, Form, Input, Item, Content, Header } from "native-base";

import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";

class RegistationForm extends Component {
  state = {
    username: "",
    password: ""
  };

  // changeHandler = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleChange = keyValue => {
    this.setState(keyValue);
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  // submitHandler = e => {
  //   e.preventDefault();

  //   this.props.signup(this.state, this.props.history);
  // };

  handleUsernameError = () => {
    if (this.props.errors) {
      if (this.props.errors.username[0]) {
        return this.props.errors.username[0];
      }
    }
  };

  render() {
    const type = this.props.match.url.substring(1);
    console.log(this.props.errors);

    if (this.props.user) {
      this.props.navigation.navigate("TestScreen");
    }
    const errors = this.props.errors;

    handleChange = keyValue => {
      this.setState(keyValue);
    };

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            {!!errors.length && (
              <View className="alert alert-danger" role="alert">
                {errors.map(error => (
                  <Text key={error}>{error}</Text>
                ))}
              </View>
            )}
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username =>
                  this.handleChange({ username: username })
                }
              />
            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                secureTextEntry
                name="password"
                onChangeText={password =>
                  this.handleChange({ password: password })
                }
              />
            </Item>
            <Button
              full
              success
              onPress={() =>
                this.props.login(this.state, this.props.navigation)
              }
            >
              <Text>Login</Text>
            </Button>
            <Button
              full
              warning
              onPress={() =>
                this.props.signup(this.state, this.props.navigation)
              }
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistationForm);
