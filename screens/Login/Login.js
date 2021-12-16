import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

class Login extends Component {
  handleLogin = () => {
    this.props.history.replace('/home');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.handleLogin}
          style={styles.button}
        >
          <Text style={styles.text}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.8,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'deepskyblue'
  },
  text: {
    color: '#fff',
    fontWeight: '700'
  }
});

export default Login;