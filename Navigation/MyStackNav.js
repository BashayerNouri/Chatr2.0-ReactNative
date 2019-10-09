import { createStackNavigator } from "react-navigation-stack";

import Login from "../Components/LoginForm"; //Login
import RegistrationForm from "../Components/RegistrationForm"; //Register
import Test from "../Components/Test"; //Register

const MyStackNav = createStackNavigator(
  {
    LoginScreen: Login,
    RegistrationScreen: RegistrationForm,
    TestScreen: Test
  },
  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      }
    },
    headerTitleStyle: {
      fontWeight: "bold"
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);

export default MyStackNav;
