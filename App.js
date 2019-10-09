import React, { Component } from "react";
import LoginForm from "./components/LoginForm";
import { Provider } from "react-redux";
import AppContainer from "./Navigation";

// Store
import store from "./redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
