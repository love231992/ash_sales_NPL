import React, { useState } from 'react'
import { Text, StyleSheet, View, Alert, FlatList, ImageBackground, TouchableOpacity, ActivityIndicator,StatusBar,} from 'react-native'
import { MaterialIcons } from "@expo/vector-icons";




export default function App({navigation}) {
  const [doList,setDoList] = useState();
  var [loading,setLoading] = useState(true)

  connect = () => {
      setLoading(true)
      const URL = "https://npl-ash.herokuapp.com/";
      fetch(URL).then(response => response.json())
      .then(response => {
          setDoList(response)
      }).catch(error => {
          Alert.alert(error.message);
      }
      ).then( () => {
        setLoading(false)
      })
  }

  const openMenu = () => {
    navigation.openDrawer()
}
  return (
      <View style = {styles.component}>
        <StatusBar hidden={true} />
          <ImageBackground source={require("../NPL_Ash/assets/new.png")} style = {styles.header}>
            <MaterialIcons name="menu" size={40} style={styles.icon} onPress={openMenu} />
              <View style={styles.headerTitle}>
                <Text style={styles.headerText}>NPL ASH MANAGEMENT</Text>
              </View>
          </ImageBackground>
          <TouchableOpacity onPress={connect}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Connect to the server</Text>
            </View>   
          </TouchableOpacity>
          {loading ?
          (
            <View style={styles.indicator}>
            <ActivityIndicator size="large" color="crimson" />
            </View>
          ):

          (
          <FlatList
            data={doList}
            keyExtractor={(item) => item[1] }
            renderItem={({item }) => (
            <TouchableOpacity activeOpacity={0.4} >
              <View style={styles.item}>  
                <Text style={styles.itemText}>{item [0]}</Text>
                <Text style={styles.itemText}>{item [1]}</Text>
              </View>
              </TouchableOpacity>
            )}
            />
          )}
          <Text style = {styles.footer}>Crafted by Lovepreet Singh</Text>
      </View>  
  )
}


const styles = StyleSheet.create({
  component:{
      backgroundColor:"white",
      flex:1,
  },
  header:{
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"center",
    height:120,
    marginBottom:0
  },
  icon:{
    position:"absolute",
    right:5,
    color:"white",

  },
  headerTitle:{
    flexDirection:"row",
  },
  headerText:{
    fontWeight:"bold",
    fontSize:20,
    color:"white",
    letterSpacing:2.3,
    marginTop:15,
    height:"100%",
    alignItems:"center"
  },
  itemText:{
      marginLeft:10,
      marginRight:10,
      fontSize: 20,
      fontWeight:"bold",
      color:"crimson",
  },
  item:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor: "#E6FDFF",
      margin: 2,
      padding:15,
      fontSize:20,
      borderRadius:2,
      borderColor:"black",
      borderWidth:0.2,
      borderStyle:"solid",
      elevation:5,
      opacity:0.8
  },
  button:{
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:"#f01d71"
},
buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    textAlign:"center",
    letterSpacing:2
},
indicator:{
  flex:1,
  justifyContent:"center"
},
footer:{
  textAlign:"center",
  padding:5,
  fontSize:15,
  fontWeight:"bold",
  color:"crimson",
  opacity:0.8,
  letterSpacing:2.5,
  backgroundColor:"#DAB785"
},

})