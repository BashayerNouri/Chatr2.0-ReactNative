import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as actionCreators from "../redux/actions";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
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

class ChannelForm extends Component {
  state = {
    name: "" //channel name
  };

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  // // handle changes in the form
  // textChangeHandler = keyValue => {
  //   this.setState(keyValue);
  // };

  //used to reset the form
  resetForm = () =>
    this.setState({
      name: ""
    });

  // submitChannel = event => {
  //   event.preventDefault();
  //   this.props.postChannel(this.state, this.resetForm, this.props.history);

  // };

  handleChange = keyValue => {
    this.setState(keyValue);
  };

  render() {
    if (this.props.user === null) return <Redirect to="/" />;

    const errors = this.props.errors;

    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Text>Create a Channel</Text>
              <Form>
                {!!errors.length && (
                  <View className="alert alert-danger" role="alert">
                    {errors.map(error => (
                      <Text key={error}>{error}</Text>
                    ))}
                  </View>
                )}
                <Body>
                  <Label style={{ color: "white" }}>Channel Name</Label>
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
                    onChangeText={name => this.setState({ name })}
                    value={this.state.name}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            success
            onPress={() =>
              this.props.postChannel(
                this.state,
                this.resetForm,
                this.props.navigation
              )
            }
          >
            <Text>Create</Text>
          </Button>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
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
    postChannel: (newChannelName, resetForm, history) =>
      dispatch(actionCreators.postChannel(newChannelName, resetForm, history)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChannelForm)
);
