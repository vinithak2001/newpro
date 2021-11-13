import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
const App = () => {

  return (
    <ScrollView >
      <View style={{ padding: 35, marginTop: 20 }} >

        <View
          style={{
            borderBottomColor: 'gold',
            borderBottomWidth: 6,
          }}
        />
        <Text style={styles.headtxt} >
          Domain Expertise
        </Text>
        <View  >
          <Image source={require('../image/AI.png')} style={styles.image1} />
        </View>
        <Text style={styles.subtxt} >
          Artificial Intelligence
        </Text>
        <Text style={styles.paratxt} >
          Lorem ipsum dolor sit amet, consectectur adipiscing elit. sed turpis Condimentum consectectur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo,ac.
        </Text>
        <View style={styles.submit} >
          <Text style={{ color: 'white' }}>
            read more
          </Text>
        </View>
        <View>
          <Image source={require('../image/brain.png')} style={styles.image1} />
        </View>
        <Text style={styles.subtxt} >
          Machine learning
        </Text>
        <Text style={styles.paratxt}>
          Lorem ipsum dolor sit amet, consectectur adipiscing elit. sed turpis Condimentum consectectur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo,ac.
        </Text>
        <View style={styles.submit} >
          <Text style={{ color: 'white' }}>
            read more
          </Text>
        </View>
        <View>
          <Image source={require('../image/ml.png')} style={styles.image1} />
        </View>
        <Text style={styles.subtxt} >
          Machine learning
        </Text>
        <Text style={styles.paratxt}>
          Lorem ipsum dolor sit amet, consectectur adipiscing elit. sed turpis Condimentum consectectur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo,ac.
        </Text>
        <View style={styles.submit} >
          <Text style={{ color: 'white' }}>
            read more
          </Text>
        </View>
        <View>
          <Image source={require('../image/cloud.png')} style={styles.image1} />
        </View>
        <Text style={styles.subtxt} >
          Cloud Computing
        </Text>
        <Text style={styles.paratxt}>
          Lorem ipsum dolor sit amet, consectectur adipiscing elit. sed turpis Condimentum consectectur placerat lobortis nibh sed consequat. Nunc pharetra cras vitae consequat facilisis phasellus. Habitant egestas id tellus sed urna ultricies ullamcorper. Sed fusce elit nec, in commodo,ac.
        </Text>
        <View style={styles.submit} >
          <Text style={{ color: 'white' }}>
            read more
          </Text>
        </View>
      </View>
      <View backgroundColor='#999' padding={20} >
        <Text style={styles.subtxt} >
          Lorenza lpse
        </Text>
        <View style={{ flexDirection:'row', padding:5,}}>
        <Icon name="location-pin" type='entypo' padding={5} size={22} />
          <Text style={styles.foottxt} >
            Location
          </Text>
        </View>
        <View style={{ flexDirection:'row', padding:5,}}>
        <Icon name="mail" type='entypo' padding={5} />
          <Text style={styles.foottxt} >
            type@mymail.com
          </Text>
        </View>
        <View style={{ flexDirection:'row', padding:5, }} >
        <Icon name="call" type='ionicons' padding={5} />
          <Text style={styles.foottxt}>
            +91 968656665
          </Text>
        </View>
        <Text style={styles.subtxt} >
          Services
        </Text>
        <View  >
          <Text style={styles.foottxt}>
            Connections
          </Text>
        </View>
        <View>
          <Text style={styles.foottxt}>
            Contacts
          </Text>
        </View>
        <View>
          <Text style={styles.foottxt}>
            Popular
          </Text>
        </View>
        <Text style={styles.subtxt}>
          Follow us on
        </Text>
        <View style={{ flexDirection:'row', padding:5, margin:5 }} >
          <Icon name="linkedin-square" type='antdesign' padding={5} />
          <Icon name="facebook-square" type='antdesign'  padding={5}/>
          <Icon name="twitter" type='antdesign' padding={5} />

        </View>


      </View>
    </ScrollView>
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
