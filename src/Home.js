import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Transition } from 'react-spring';
import { withRouter, Route, Switch } from 'react-router-dom';

import Page from './Page';

class Home extends Component {
  render() {
    console.log(this.props.location.pathname.split('/').filter(a => a)[0])
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.history.push('/page');
          }}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Try me!</Text>
          </View>
        </TouchableOpacity>
        <Transition
          native
          // config={{ tension: 1, friction: 10 }}
          items={['page']}
          // keys={this.props.location.pathname.split('/').filter(a => a)[0]}
          from={{ height: 0, opacity: 0 }}
          enter={{ height: 100, opacity: 1 }}
          leave={{ height: 0, opacity: 0 }}
        >
          {item => animatedStyles => {
            console.log(item, animatedStyles.height.value, animatedStyles.opacity.value)
            return (
              // <Switch location={this.props.location}>
                <Route
                  path="/page"
                  render={props => Page({ ...props, animatedStyles })}
                />
              // </Switch>
            )
          }}
        </Transition>
      </View>
    );
  }
}

export default withRouter(Home);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'hsl(0,0%,20%)'
  },
  button: {
    backgroundColor: '#e1e1e1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15
  }
});
