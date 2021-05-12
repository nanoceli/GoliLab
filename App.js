import React, {useState} from 'react';
import { StyleSheet, Text,TouchableOpacity, View, Image, Alert, TextInput } from 'react-native';
import porrito from './assets/porrito.png'
import * as ImagePicker from 'expo-image-picker'
import *  as Sharing from 'expo-sharing'

export default function App() {
let [Imagen, setImagen] = useState(null)
const [text, onChangeText] = useState("Useless Text");


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
     <View style={{flex:1, flexDirection:'row', position:'absolute', top:50}}><Image style={styles.img2} source={porrito}/><TextInput value={text} style={styles.input} onChangeText={onChangeText}></TextInput></View> 
      <Text style={styles.title}>GoliLab</Text>
      <TouchableOpacity onPress={OpenImage}><Image style={styles.img} source={{uri: Imagen !== null ? Imagen.localUri : 'https://pbs.twimg.com/media/DfF4w36WAAAXl6y.jpg'}}/></TouchableOpacity>
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
  input: {
    height: 40,
    width:100,
    margin: 12,
    borderWidth: 1,
    borderRadius:5,
    backgroundColor:'white'
  },
  title: {color:'white', fontSize: 30},
  img:{width:200, height:200, borderRadius:100, resizeMode:'contain'},
  img2:{width:70, height:70, borderRadius:140, resizeMode:'contain'},
  button:{backgroundColor:'red', padding:7, width:100}
});
