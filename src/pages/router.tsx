import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import Home from './Home/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TopBar from '../components/TopBar/TopBar';

const Stack = createStackNavigator();

export const SignedOut = (props: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{login: props.toggleState}}
        />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
const TabStack = (props: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{logout: props.route.params.toggleState}}
        options={{
          header: TopBar,
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home}
        initialParams={{logout: props.route.params.toggleState}}
        options={{
          header: TopBar,
        }}
      />
      <Tab.Screen
        name="Home3"
        component={Home}
        initialParams={{
          logout: props.route.params.toggleState,
        }}
        options={{
          header: TopBar,
        }}
      />
    </Tab.Navigator>
  );
};

export const SignedIn = (props: any) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Tabs"
          component={TabStack}
          initialParams={{
            toggleState: props.toggleState,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const createRootNavigator = (signedIn = false, toggleState: any) => {
  if (!signedIn) {
    return <SignedOut toggleState={() => toggleState()} />;
  } else {
    return <SignedIn toggleState={() => toggleState()} />;
  }
};
