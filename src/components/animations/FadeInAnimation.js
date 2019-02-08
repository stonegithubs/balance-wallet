import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { InteractionManager } from 'react-native';

const {
  set,
  cond,
  startClock,
  stopClock,
  clockRunning,
  block,
  timing,
  call,
  Value,
  Clock,
} = Animated;


export default class FadeInAnimation extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    duration: PropTypes.number,
    easing: PropTypes.func,
    from: PropTypes.number,
    isInteraction: PropTypes.boolean,
    style: PropTypes.object,
    to: PropTypes.number,
  }

  static defaultProps = {
    duration: 250,
    easing: Easing.quad,
    from: 0,
    isInteraction: false,
    to: 1,
  }

  runTiming = () => {
    const {
      to, easing, from, duration, isInteraction,
    } = this.props;

    const handle = isInteraction && InteractionManager.createInteractionHandle();

    const state = {
      finished: new Value(0),
      frameTime: new Value(0),
      position: new Value(0),
      time: new Value(0),
    };

    const clock = new Clock();

    const config = {
      duration,
      easing,
      toValue: new Value(0),
    };

    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, from),
        set(state.frameTime, 0),
        set(config.toValue, to),
        startClock(clock),
      ]),
      timing(clock, state, config),
      cond(state.finished, [
        stopClock(clock),
        call([], () => isInteraction && InteractionManager.clearInteractionHandle(handle)),
      ]),
      state.position,
    ]);
  }

  animatedOpacity = this.runTiming();

  render = () => (
    <Animated.View
      {...this.props}
      style={[
        this.props.style,
        { opacity: this.animatedOpacity },
      ]}
    />
  )
}
