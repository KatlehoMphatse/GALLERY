import { StatusBar } from 'react-native';
import React from 'react'
import { StyleSheet,Image, Text, View } from 'react-native';

const  Display =({image}) => {

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      
        <Text style= {{fontWeight: 'bold', fontSize:24, color: '#fff'}}>GALLERY </Text>
      <Image style={styles.herby} source = {image} />    
      <StatusBar style="auto" />
    </View>
  );
}
export default Display

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  herby:{
    width:325,
    height: 300,
   
  },
  
});