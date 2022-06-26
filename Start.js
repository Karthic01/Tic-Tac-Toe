import { View, Text,StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { height, width } from 'react-native-dimension'

import { useNavigation } from '@react-navigation/native'

export default function Start() {
    
    const navigation = useNavigation();
    const [player1,setplayer1]=useState("")
    const [player2,setplayer2]=useState("")

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to{"\n"} TIC TAC TOE{"\n"}</Text>
      
      <Text style={styles.text}>Player 1</Text>
      <TextInput
        style={styles.input}
        onChangeText={setplayer1}
        value={player1}
        autoCapitalize = {"words"}
        placeholder="Name"
        placeholderTextColor="red"
      />
 
      <Text style={styles.text}>Player 2</Text>
      <TextInput
        style={styles.input}
        onChangeText={setplayer2}
        value={player2}
        autoCapitalize = {"characters"}
        placeholder="Name"
        placeholderTextColor="red"
      />
      <TouchableOpacity
          style={styles.button}
          onPress={()=>{navigation.navigate("Game",{p1:player1,p2:player2})

          }}>
        <Text style={styles.btntext}>Play...</Text></TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      input:{
          backgroundColor:'black',
          borderWidth: 4,
          borderColor:'blue',
          width:width(80),
          height:height(7),
          textAlign:'center',
          color:'red',
          fontSize:20
  
      },
      text: {
        color:'blue',
        fontSize:40,
        fontWeight:'bold',
        textAlign: 'center',marginTop:25

      },
      button: {
        backgroundColor:'blue',
        width:width(30),
        padding:3,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        margin:25
      },
      btntext:{
        fontSize:25,
        color:'red',
        textAlign:'center'
      }
})