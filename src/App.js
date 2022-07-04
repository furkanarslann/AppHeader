import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import Header from './header/Header';

const headerApp = () => {


  return (
    <SafeAreaView style={styles.container}>

      <Header />

    </SafeAreaView>

  );
}

export default headerApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },

});