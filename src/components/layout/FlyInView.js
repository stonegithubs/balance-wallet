import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated } from 'react-native';
import Flex from './Flex';

export default class FlyInView extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
  };

  state = {
    animation: new Animated.Value(0),
  };

  componentDidMount() {
    const { animation } = this.state;

    Animated.timing(animation, { duration: 300, toValue: 1 }).start();
  }

  componentWillUnmount() {
    const { animation } = this.state;

    Animated.timing(animation, { duration: 300, toValue: 0 }).start();
    animation.stopAnimation();
  }

  render() {
    const { children, style } = this.props;
    const { animation } = this.state;

    return (
      <Flex component={Animated.View} style={{
        ...style,
        marginTop: animation.interpolate({ inputRange: [0, 1], outputRange: [40, 0] }),
        opacity: animation.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
      }}>
        {children}
      </Flex>
    );
  }
}
