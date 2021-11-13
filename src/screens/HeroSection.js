import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Header } from 'react-native-elements';
const App = ({ navigation }) => {

  return (

    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header
      containerStyle={{
        backgroundColor:'#eee'
      }}
      leftComponent={{icon:'menu',color:'black'}}
      rightComponent={{text:'Help', style:{color:'#000'}  }}
      />
      <Text style={styles.headtxt} >
        Lets Stay
      
        Connected
      </Text>
      <View style={{ marginTop: 0, alignContent: 'center' }} >
        <Text style={styles.subtxt}>
          At lorem ipsum we help

          connect people with each

          other without any worries
        </Text>
      </View>
      <View style={{ marginTop: 35 }}  >
        <Image source={require('../image/image1.png')} style={styles.image1} />

      </View>

      <View style={{ flexDirection: 'row' }} >
        <TouchableOpacity onPress={() => navigation.navigate("Domain")} >
          <View style={styles.buttonlrn} >
            <Text style={{ color: 'red' }}  >Learn More</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Formpage")}  >
          <View style={styles.buttonCnt} >
            <Text style={{ color: 'white', fontSize:15 }} >Connect</Text>
          </View>
        </TouchableOpacity>

      </View>


    </View>
  );
};
export default App;

const styles = StyleSheet.create(
  {
    headtxt: {
      fontSize: 50,     
      fontWeight: 'bold',
      paddingLeft:25,
      marginTop:18

    },
    subtxt: {
      fontSize: 25,
      fontFamily: 'Roboto',
      fontWeight: "800",
      padding:25

    },
    image1: {
      width: '100%',
    },
    buttonlrn: {
      margin: 18,
      borderColor: 'red',
      borderWidth: 3,
      padding: 9

    },
    buttonCnt: {
      margin: 20,
      backgroundColor: 'red',
      padding: 10,
      marginLeft:'15%',
      alignContent:'center'
      

    }

  }
)
