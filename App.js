import React from 'react';
import { Button, StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="uyg" onPress={() => Alert.alert(
            'Alert Title 1',
            alertMessage,
          )}></Button>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone toygiyg open the developer menu.</Text>
        <TouchableHighlight style={styles.wrapper}
            onPress={() => Alert.alert(
            'Alert Title 2',
            alertMessage,
          )}
        >
          <View style={styles.button}>
            <Text>Alert with message and default button</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
