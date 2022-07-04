import { SafeAreaView, View, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import Header from './components/header/Header';

const headerApp = () => {

  const burgerIcon = require('../assets/burger.png');
  const brandIcon = require('../assets/brand.png');
  const editIcon = require('../assets/edit.png');

  return (
    <SafeAreaView style={styles.container}>

      <Header iconLeft={burgerIcon} iconCenter={brandIcon} iconRight={editIcon} />

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