import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text,View } from "react-native";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Bonsai from "./components/Bonsai";



const Stack = createStackNavigator();

const MyStack=()=>{
  return(
    <Stack.Navigator
    initialRouteName="Signup"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#3740FE',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    }}>
      <Stack.Screen
      name="Login"
      component={Login}
      options= {
        {title:'Login'}
      }/>
        <Stack.Screen
      name="Signup"
      component={Signup}
      options= {
        {title:'Signup'}
      }/>
        <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options= {
        {title:'Dashboard'}
      }/>
    </Stack.Navigator>

  );
}
const App = () =>{
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )

};

export default App;