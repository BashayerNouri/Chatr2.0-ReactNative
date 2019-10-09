import { createStackNavigator } from "react-navigation-stack";

import LoginForm from "../components/LoginForm"; //Login
import RegistrationForm from "../components/RegistrationForm"; //Register
import Test from "../components/Test.js"; //Register

import ChannelList from "../components/ChannelList";
import ChannelDetail from "../components/ChannelDetail";

const MyStackNav = createStackNavigator(
  {
    LoginScreen: LoginForm,
    RegistrationScreen: RegistrationForm,
    TestScreen: Test,
    ChannelScreen: ChannelList,
    ChatScreen: ChannelDetail
  },
  {
    initialRouteName: "LoginScreen",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00c9ff"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default MyStackNav;
