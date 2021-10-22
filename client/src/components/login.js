import React, { Component } from 'react';
import { Text, Alert, Button, View, StyleSheet, TextInput } from 'react-native';

export const LoginScreen = () => {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   const go = () => {
//            const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//             if (true){
//                alert('valid');
//            }
//            else{
//                alert();
//            }
 
//   }
  
//   const onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }
    return (
      <View style={styles.container}>
      <Text style={styles.inputext}>Log In</Text>
        <TextInput
          value='Email'
           label='Email'
          style={styles.input}
        />
        <TextInput
          value='password'
          label='Password'
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
        />
      </View>
    );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
    marginTop:'10px'
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});