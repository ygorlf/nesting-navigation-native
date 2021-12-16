import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Redirect, Switch } from 'react-router-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Login
import Login from './screens/Login/Login';

// Routes
import Routes from './routes/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Switch>
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login {...props} />
              )}
            />
            <Route
              render={(props) => (
                <Routes {...props} />
              )}
            />
            <Redirect to='/login' />
          </Switch>
        </View>
      </NativeRouter>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
