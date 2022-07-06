import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movie from './screens/Movie';
import TV from './screens/TV';
import Movieid from './screens/Movieid';
import TVid from './screens/TVid';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeScreen() {

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: false,  
      headerShown: false,
      tabBarLabelStyle: {
        fontSize: 15
      },
      tabBarStyle: {
        height: 60,
        paddingHorizontal: 5,
        paddingBottom: 3,
        backgroundColor: 'rgba(39, 39, 42, 1)',
        position: 'absolute',
        borderTopWidth: 0,
    },
    }}
    >
    <Tab.Screen
      name="Movie"
      component={Movie}
      options={{
        tabBarLabel: 'Movie',
        tabBarIcon: ({ color, size }) => (
          // <Ionicons name="home" color={color} size={30} />
          // <FontAwesome icon={BrandIcons.github} />
          <View style={{backgroundColor: color, borderRadius: 15, height: 35, width: 35}}>
            <Image style={{height: 30, width: 30, justifyContent: "center", alignContent: "center", alignItems: "center"}} source={require('./assets/img/cinema.png')} />
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="TV"
      component={TV}
      options={{
        tabBarLabel: 'TV',
        tabBarIcon: ({ color, size }) => (
          // <Ionicons name="tv-outline" color={color} size={30} />
          <View style={{backgroundColor: color, borderRadius: 15, height: 35, width: 35}}>
            <Image color={color} style={{height: 30, width: 30}} source={require('./assets/img/tv-app.png')} />
          </View>

        ),
      }}
    />
  </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Movieid" component={Movieid} />
        <Stack.Screen name="TVid" component={TVid} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;