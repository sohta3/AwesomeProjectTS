/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

interface AwesomeProjectProps {
}

interface AwesomeProjectState {
}

class AwesomeProject extends React.Component<AwesomeProjectProps, AwesomeProjectState>{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to this crazy time! このふざけた時代へようこそ きみはtough boy, tough boy, tough boy ...
          ドコモかしこも傷だらけ
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
