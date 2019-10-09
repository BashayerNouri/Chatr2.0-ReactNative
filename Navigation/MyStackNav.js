import { createStackNavigator } from "react-navigation-stack";

import LoginForm from "../components/LoginForm"; //Login
import RegistrationForm from "../components/RegistrationForm"; //Register
import Test from "../components/Test.js"; //Register

const MyStackNav = createStackNavigator(
  {
    LoginScreen: LoginForm,
    RegistrationScreen: RegistrationForm,
    TestScreen: Test
  },
  {
    initialRouteName: "LoginScreen",

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default MyStackNav;
