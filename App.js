import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from 'react-native-vector-icons/AntDesign';
import { Icon } from 'react-native-vector-icons/Icon';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/mainstack';
const App = () => {

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
    
  );
};
export default App;

const styles = StyleSheet.create(
  {
    headtxt: {
      fontSize: 41,
      fontWeight: '500',
      marginTop: 1
    },
    subtxt: {
      fontSize: 25,
      marginTop: '5%',
      fontWeight: "700"
    },
    image1: {
      width: '100%',
      marginTop: 25

    },
    buttonlrn: {
      marginTop: '2%',
      borderColor: '#888',
      borderWidth: 3,
      padding: 9,
      borderRadius: 5

    },
    buttonCnt: {
      margin: 18,
      backgroundColor: 'red',
      padding: 9,

    },
    submit: {
      backgroundColor: '#999',
      marginTop: 10,
      padding: 9,
      width: '25%',
      marginBottom: '10%'
    },
    line: {
      height: 1,
      width: '100%',
      color: 'black'
    },
    paratxt: {
      fontSize: 18,
      marginTop: '5%'
    },
    foottxt: {
      fontSize: 18,
      marginTop: '2%'
    },

  }
)
