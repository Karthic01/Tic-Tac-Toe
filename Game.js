
import { StyleSheet, Text, View, TouchableOpacity,Image,Modal} from 'react-native';
import react, {useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'

var v=[-1,-1,-1,-1,-1,-1,-1,-1,-1]
var c=0

function press(i,chance,setchance,setModalVisible)
{
  if(chance==0)
  v[i]=0
  else if(chance==1)
  v[i]=1
  var chk=check()
  if(chk!=-1){
    console.log("Win")
    setModalVisible(true)
  }
  if(chk==-1)
  c++
  if(c==9)
  setModalVisible(true)
  setchance((chance+1)%2)
}

function check(){
  console.log(v)
  for (let i = 0; i < 3; i++) {
    if (v[i*3]==v[i*3+1] && v[i*3+1]==v[i*3+2] && v[i*3]!=-1)
    return v[i]
  }
  for (let i = 0; i < 3; i++) {
    if (v[i]==v[i+3] && v[i+3]==v[i+6] && v[i]!=-1)
    return v[i]
  }
  if (v[0]==v[4] && v[4]==v[8] && v[4]!=-1)
  return v[0]
  if(v[2]==v[4] && v[4]==v[6] && v[4]!=-1)
  return v[2]
  
  return -1
}

export default function Game() {
  const route = useRoute();
  const { p1, p2 } = route.params;
  const [chance,setchance]=useState(1)
  const [modalVisible, setModalVisible] = useState(false);
  const [s1,sets1] = useState(0)
  const [s2,sets2] = useState(0)
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          {c!=9 && <Text style={styles.modalText}>Congrats !!! {chance==0?"X":"O"} </Text>}
          {c==9 && <Text style={styles.modalText}>Match Draw... </Text>}
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {v=[-1,-1,-1,-1,-1,-1,-1,-1,-1]
                if(chance==0 && c!=9)
                sets1(s1+1)
                else if(chance==1 && c!=9)
                sets2(s2+1)
                c=0
                setModalVisible(!modalVisible)
                
                }}
              
            >
              <Text style={styles.textStyle}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.Heading}>Tic Tac Toe</Text> 
      <View style={{width:width(90),borderBottomWidth:4,borderBottomColor:'blue',marginBottom:15}}></View>
      <View style={{flexDirection:'row',width:width(100),justifyContent:'space-around'}}>
        <View style={styles.container}><Text style={[styles.Heading,styles.Score]}>{p1} - X</Text><Text style={styles.Heading}>{s1}</Text></View>
        <View style={styles.container}><Text style={[styles.Heading,styles.Score]}>{p2} - O</Text><Text style={styles.Heading}>{s2}</Text></View>
      </View>
      <View style={styles.flexrow}>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[0]==-1)?press(0,chance,setchance,setModalVisible):null}}>{v[0]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[0]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[1]==-1)?press(1,chance,setchance,setModalVisible):null}}>{v[1]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[1]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[2]==-1)?press(2,chance,setchance,setModalVisible):null}}>{v[2]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[2]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
      </View>
      <View style={styles.flexrow}>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[3]==-1)?press(3,chance,setchance,setModalVisible):null}}>{v[3]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[3]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[4]==-1)?press(4,chance,setchance,setModalVisible):null}}>{v[4]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[4]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[5]==-1)?press(5,chance,setchance,setModalVisible):null}}>{v[5]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[5]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
      </View>
      <View style={styles.flexrow}>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[6]==-1)?press(6,chance,setchance,setModalVisible):null}}>{v[6]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[6]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[7]==-1)?press(7,chance,setchance,setModalVisible):null}}>{v[7]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[7]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
        <TouchableOpacity style={styles.box} onPress={()=>{(v[8]==-1)?press(8,chance,setchance,setModalVisible):null}}>{v[8]==0 && <Image source={require('./O_logo.png')} style={styles.Logo}/> || v[8]==1 && <Image source={require('./X_logo.png')} style={styles.Logo}/> }</TouchableOpacity>
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

  flexrow:{
    flexDirection:'row',
    width:350,
    justifyContent:'space-around',
    paddingBottom: 15
  },

  box:{
    borderColor: 'blue',
    borderWidth: 5,
    width:100,
    height:100,
    backgroundColor:'black',
    color:'blue',
    alignItems:'center',
    justifyContent:'center'
    
  },
  Logo:{
    width: 100,height:100,
  },
  Heading:{
    color:'red',
    fontSize:50,
    fontWeight:'bold',
    textShadowColor:'blue',
    textShadowRadius:1,
    textShadowOffset:{width:3,height:3},
    marginBottom:15

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    height:240,
    width:250,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:20
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:25
  },
  Score: {
    fontSize:30,
    textShadowRadius:0,
  }
});
