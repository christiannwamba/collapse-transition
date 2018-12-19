import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home'


class App extends Component {
  render() {
    return (
      <View>
        <Router>
          {/* <Home></Home> */}
          <Route path="/" component={Home}></Route>
          
          {/* <Page></Page> */}
        </Router>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'hsl(0,0%,20%)'
  },
  button: {
    backgroundColor: '#e1e1e1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
  }
});
