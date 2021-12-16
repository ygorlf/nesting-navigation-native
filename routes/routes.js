import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Routes
import Home from '../screens/Home/Home';
import Patients from '../screens/Patients/Patients';
import Profile from '../screens/Profile/Profile';

// Components
import TabBar from '../components/TabBar';

class Routes extends Component {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Switch>
          <Route
            exact
            path='/home'
            render={(props) => (
              <Home {...props} />
            )}
          />
          <Route
            exact
            path='/patients'
            render={(props) => (
              <Patients {...props} />
            )}
          />
          <Route
            exact
            path='/profile'
            render={(props) => (
              <Profile {...props} />
            )}
          />
        </Switch>
        <TabBar
          history={this.props.history}
          location={this.props.location}
        />
      </SafeAreaView>
    )
  }
}

export default Routes;