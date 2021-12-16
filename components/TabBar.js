import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

class TabBar extends Component {
  handleNavigation = (route) => {
    this.props.history.push(route);
  }

  render() {
    const { location } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            ...styles.tabItem,
            ...location.pathname === '/home' && {
              borderTopColor: 'blue',
              borderTopWidth: 2,
            }
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleNavigation('/home')
            }}
          >
            <Text>
              Home
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tabItem,
            ...location.pathname === '/patients' && {
              borderTopColor: 'blue',
              borderTopWidth: 2,
            }
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleNavigation('/patients')
            }}
          >
            <Text>
              Patients
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tabItem,
            ...location.pathname === '/profile' && {
              borderTopColor: 'blue',
              borderTopWidth: 2,
            }
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.handleNavigation('/profile')
            }}
          >
            <Text>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: 75,
    backgroundColor: '#fff'
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 3,
    height: 75
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: RFValue(12)
  }
});

export default TabBar;