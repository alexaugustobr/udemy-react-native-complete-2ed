import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import AuthLogo from './authLogo';
import AuthForm from './authForm';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d428a',
    padding:50
  },
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  }
});

export default class AuthComponent extends Component {

  state = {
    loading:false
  }

  render() {

    if(this.state.loading) {
        return (
          <View style={styles.loading}>
            <ActivityIndicator/>
          </View>
        );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo/>
            <AuthForm/>
          </View>
        </ScrollView>
      );
    }

    
  }
}