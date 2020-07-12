import React  from 'react';
import { StyleSheet, Text, View, Alert, FlatList , TouchableOpacity, ActivityIndicator} from 'react-native';
import { Appbar, Card, List } from 'react-native-paper';


export default class Flyash extends React.Component {
    state = {lifting:'', refreshing:false, loading:false }
    connect = () =>{
      this.setState({loading:true})
      const URL = "https://npl-ash.herokuapp.com/";
      try {
        fetch(URL).then(data => data.json())
        .then(res => {
            this.setState({lifting:res})
        }).then(this.setState({refreshing:false}))
      } catch (error) {
         Alert.alert(error) 
      }
      this.setState({loading:false})
    }
    refresh (){
        this.setState({ 
            refreshing:true
        },
        () => {
            this.connect()
        })
    }

    componentDidMount(){
        this.connect()
    }
    render(){
        return(
            <View style={styles.container}>
        <Appbar.Header style={{backgroundColor:"#128c7e"}}>
            <Appbar.Content style={{alignItems:"center"}} title="ASH MANAGEMENT" subtitle="FLY ASH" titleStyle={{color:'#2c363f'}}  subtitleStyle={{color:"#2c363f"}}/>
        </Appbar.Header>
        {this.state.loading ? (<ActivityIndicator size="large" color="#00ff00"  />) : (
          <FlatList 
          data={this.state.lifting}
          keyExtractor={(item) => item[0] }
          renderItem={({item}) =>( 
          <View>
              <Card style={styles.cardContain}>
                  <TouchableOpacity>
              <List.Item
                style={styles.list}
                titleStyle={styles.card}
                descriptionStyle={styles.card}
                title={item[0]}
                description={item[1]}
              />
              </TouchableOpacity>
              </Card>
          </View>
          )}
          onRefresh={() =>this.refresh()}
          refreshing={this.state.refreshing}
        />
        ) }       
    </View>
    )}
}


    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card:{
    color:'#da4167',
    textAlign:"center",
    fontSize:17,
    fontWeight:"bold"
    
  },
  cardContain:{
    borderBottomWidth:1,
    borderBottomColor:"#70b77e",
  },
});
