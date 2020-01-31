import React, { Component } from 'react';
import { Platform } from 'react-native'

import { createSwitchNavigator,createAppContainer } from 'react-navigation'

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs';

import SignIn from './components/auth'
import News from './components/news'
import Games from './components/games'


