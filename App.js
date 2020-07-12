import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Flyash from './screens/flyAsh'
import Pondash from './screens/pondAsh' 
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor:"black",
                activeBackgroundColor: '#128c7e',
                inactiveBackgroundColor:"#128c7e",
                labelStyle:{fontSize:18,fontWeight:"bold"},
                
              }}
            >
                <Tab.Screen
                options={{
                  tabBarLabel: 'Fly Ash',
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="truck" color={color} size={size} />
                  ),
                }}
                name="Fly Ash"
                component={Flyash} />
                <Tab.Screen 
                options={{
                  tabBarLabel: 'Pond Ash',
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="dump-truck" color={color} size={size} />
                  ),
                }}
                name="Pondash" component={Pondash} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default function App() {
  return (
    <View style={styles.container}>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
