import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';

const App = () => {

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor:'#999', justifyContent:'center' }}>
     <View style={{ height:'65%' , backgroundColor:'white', borderRadius:8, padding:25}} >
       <Text style={styles.headtxt} >
         Fill out the form
       </Text>
       <Text style={styles.subtxt} >
         Name of the applicant
       </Text>
       <View style={styles.buttonlrn} >
         <TextInput placeholder="Enter Name" />
          
       </View>
       <Text style={styles.subtxt} >
         Occupation
       </Text>
       <View style={styles.buttonlrn} >
         <TextInput placeholder="Enter Occupation" />
           
         
       </View>
       <Text style={styles.subtxt} >
         Address
       </Text>
       <View style={styles.buttonlrn} >
         <TextInput placeholder=" Enter Address" />    
       </View>
       <View style={styles.submit} >
       <Text style={{ color:'white', fontSize:18 }} >
         Submit
       </Text>
     </View>

     </View>
     
     
    </View>
  );
};
export default App;

const styles= StyleSheet.create(
 {
  headtxt:{
    fontSize:21,    
    fontWeight:'bold',
     marginTop:1
  },
  subtxt:{
    fontSize:18,
     marginTop:'5%' 
   },
   image1:{
     width:'100%'
   },
   buttonlrn:{
     
     borderColor:'#888',
     borderWidth:3,
    
     borderRadius:5

   },
   buttonCnt:{
    margin:18,
    backgroundColor:'red',
    padding:9,

   },
   submit:{
     backgroundColor:'#497bf5',
     marginTop:10,
     padding:11,
     borderRadius:8,
     width:'25%'
   }
  
 }
)
  