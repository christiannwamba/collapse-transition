import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-dom';

import { animated } from 'react-spring';

class Page extends Component {
  
  render() {
    const AnimatedView = animated(View);
    const { height, opacity } = this.props.animatedStyles;


    return (
      <AnimatedView
        style={{
          // transform: [
          //   {translateY: height.interpolate(t => `translateY(${t})`)}
          // ],
          height: height.interpolate(t => t + 'vh'),
          opacity: opacity.interpolate(o => o),
          backgroundColor: '#e1e1e1',
          // height: '100vh',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.history.push('/');
          }}
        >
          <View>
            <Text style={styles.text}>Hide</Text>
          </View>
        </TouchableOpacity>
      </AnimatedView>
    );
  }
}

export default withRouter(Page);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'hsl(0,0%,0%)'
  },
  page: {
    backgroundColor: '#e1e1e1',
    height: '100vh',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15
  }
});
