import { StatusBar } from 'react-native';
import {useState} from 'react';
import { StyleSheet,View,TouchableOpacity,Text, Image } from 'react-native';
import Display from './Display';

export default function App() {
  const[image,setImage]= useState(require('./assets/herbaaa.jpg'));

  function FirstImage(){
    setImage(require('./assets/Happy.jpg'));
}

  function SecondImage(){
    setImage(require('./assets/Normal.jpg'));
  }

  function ThirdImage(){
    setImage(require('./assets/Sad.jpg'));
  }
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

      <View style= {styles.Header}>
        <Text style={{fontSize:20}}>Choose Picture to VIew</Text>
      </View>
      <Display image ={image} />
      <View style ={styles.container2}>
        <TouchableOpacity onPress={FirstImage}>
          <Image style={styles.img} source = {require('./assets/Happy.jpg')}/>
         
        </TouchableOpacity>

        <TouchableOpacity onPress={SecondImage}>
          <Image style={styles.img} source = {require('./assets/Normal.jpg')}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={ThirdImage}>
          <Image style={styles.img} source = {require('./assets/Sad.jpg')}/>
        </TouchableOpacity>
        </View>
    </View>
 
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    height: 50,
    width: 50,
    marginBottom:70,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth:3
  },

  container2:{
    flexDirection:'row',
    justifyContent: 'space-evenly',
    width: '100%',
    backgroundColor: 'purple',
    height: 100

    
  },
  Header:{
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems:'center',
    height: 30

  }


});
