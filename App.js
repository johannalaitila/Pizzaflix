import React from 'react';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import FoodScreen from './screens/FoodScreen';
import ViewOrderScreen from './screens/ViewOrderScreen';
import TrackOrderScreen from './screens/TrackOrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import IncomingOrderBar from './components/IncomingOrderBar';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MenuStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="FoodScreen" component={FoodScreen} />
      <Stack.Screen name="ViewOrderScreen" component={ViewOrderScreen} />
      <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
    </Stack.Navigator>
  )
}

function EverythingStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="FoodScreen" component={FoodScreen} />
      <Stack.Screen name="ViewOrderScreen" component={ViewOrderScreen} />
      <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <View style={{ marginTop: 30, flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => (
          {
            tabBarIcon: ({ focused, color, size }) => 
            {
              let iconName;
              switch(route.name){
                case 'Home':
                  iconName = 'md-pizza'
                  break;
                case 'Menu':
                  iconName = 'md-book'
                  break;
                case 'Profile':
                  iconName = 'md-person'
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color}     />;
            },
          })}
          tabBarOptions={
            {
              activeTintColor: 'tomato',
              inactiveTintColor: 'gray',
            }
          }
        >
          <Tab.Screen name="Home" component={EverythingStack} />
          <Tab.Screen name="Menu" component={MenuStack} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}