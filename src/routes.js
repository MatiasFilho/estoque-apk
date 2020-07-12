import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';

// import SelectProvider from './pages/New/SelectProvider';
// import SelectDateTime from './pages/New/SelectDateTime';
// import Confirm from './pages/New/Confirm';

import ListProduct from './pages/Dashboard/ListProduct';
import EditProduct from './pages/Dashboard/EditProduct';
import CreateProduct from './pages/Dashboard/CreateProduct';

import Profile from './pages/Profile';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator(
                {
                  ListProduct,
                  EditProduct,
                  CreateProduct,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Produtos',
                tabBarIcon: (
                  <Icon
                    name="loyalty"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8b41a8',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );
