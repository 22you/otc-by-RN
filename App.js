import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

 import Route from './main/route/router'

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

export default class App extends Component {
  render() {
    return (
       <Route/>
    );
  }
}
