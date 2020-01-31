import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

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
    backgroundColor: '#fff'
  }
});

export default class AuthComponent extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>Login Main</Text>
        <Button title="go" onPress={
          () => this.props.navigation.navigate('App')
        } />
      </View>
    );
  }
}