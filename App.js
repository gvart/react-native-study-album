/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <View style={{flex: 1}}>
          <Header name={'Albums!'}/>
          <AlbumList/>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
