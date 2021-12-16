import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AttendancePatients extends Component {
  state = {
    patients: Array.from(Array(25).keys())
  };

  renderPatients = () => {
    return this.state.patients.map((patient) => (
      <Text
        key={patient}
      >
        Patient {patient}
      </Text>
    ))
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>AttendancePatients</Text>
        {this.renderPatients()}
      </View>
    );
  }
}

export default AttendancePatients;