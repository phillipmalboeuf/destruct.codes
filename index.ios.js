import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

import { DestructView } from './view.js'

export default class DestructCodes extends Component {
  render() {
    return (
      <DestructView />
    );
  }
}

AppRegistry.registerComponent('destructcodes', () => DestructCodes);
