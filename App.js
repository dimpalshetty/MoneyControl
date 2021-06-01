
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, SignIn} from './Screens';



const AuthStack = createStackNavigator();
export default () => (
  <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Home}/>
      <AuthStack.Screen name="SignIn" component={SignIn}/>
      {/*<AuthStack.Screen name="CreateAccount" component={CreateAccount}/> */}
    </AuthStack.Navigator>
  </NavigationContainer>

)
