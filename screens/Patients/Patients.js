import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

// Pages
import AttendancePatients from './AttendancePatients';
import HospitalizedPatients from './HospitalizedPatients';
import AppointmentPatients from './AppointmentPatients';

// Styles
import theme from '../../styles/theme';

const TabTopNavigator = createMaterialTopTabNavigator();

class Patients extends Component {
  render() {
    return (
      <View
        style={{ flex: 1}}
      >
        <NavigationContainer>
          <TabTopNavigator.Navigator
            screenOptions={{
              tabBarActiveTintColor: theme.colors.main,
              tabBarInactiveTintColor: theme.colors.neutral,

              tabBarScrollEnabled: true,
              tabBarLabelStyle: {
                fontSize: 12,
                width: 143,
                // fontFamily: theme.fonts.medium
              },
              tabBarStyle: {
                backgroundColor: theme.colors.light
              }
            }}
          >
            <TabTopNavigator.Screen
              name="Em atendimento"
              component={AttendancePatients}
            />
            <TabTopNavigator.Screen
              name="Internados"
              component={HospitalizedPatients}
            />
            <TabTopNavigator.Screen
              name="Interconsulta"
              component={AppointmentPatients}
            />
          </TabTopNavigator.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default Patients;