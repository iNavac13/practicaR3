import { View, Text } from "react-native";
import React from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import LoginView from "./src/LoginView";
import RegisterView from "./src/RegisterView";

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="registro" component={RegisterView} title="Registro"/>
        <Scene key="login" component={LoginView} title="Login" initial={true} hideNavBar/>
      </Scene>
    </Router>
  );
};

export default App;
