import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, Alert } from 'react-native';
import porrito from './assets/porrito.png'
import * as ImagePicker from 'expo-image-picker'
import *  as Sharing from 'expo-sharing'
import NavigationBar from 'react-native-navbar';

export default function App() {
let [Imagen, setImagen] = useState(null)
const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};

const titleConfig = {
  title: 'Hello, world',
};

let OpenImage = async () => {
 let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
 if(permissionResult.granted === false )return alert('permission denied'); 
 let result = await ImagePicker.launchImageLibraryAsync();
 if(result.cancelled === true)return ;
 setImagen({localUri: result.uri})
}

const ShareImage = async () => {
  if(!Sharing.isAvailableAsync()){
    alert('accion denegada')
    return;
  }
  await Sharing.shareAsync(Imagen.localUri);
}

  return (
    <View style={styles.container}>

         <NavigationBar
         
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
      <Text style={styles.title}>Soy el mas picante papurri!</Text>
      <TouchableOpacity onPress={OpenImage}><Image style={styles.img} source={{uri: Imagen !== null ? Imagen.localUri : 'https://pbs.twimg.com/media/DfF4w36WAAAXl6y.jpg'}}/></TouchableOpacity>
      <Image style={styles.img} source={porrito}/>
      {
        Imagen ?      
        <TouchableOpacity onPress={ShareImage} style={styles.button} ><Text style={styles.title}>Share Img</Text></TouchableOpacity>  :
        <View/>

      }
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
  title: {color:'white', fontSize: 30},
  img:{width:200, height:200, borderRadius:100, resizeMode:'contain'},
  button:{backgroundColor:'red', padding:7, width:100}
});
