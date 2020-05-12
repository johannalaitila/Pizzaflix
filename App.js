import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import FoodScreen from './screens/FoodScreen';
import ViewOrderScreen from './screens/ViewOrderScreen';
import TrackOrderScreen from './screens/TrackOrderScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MenuStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="Menu"
        component={MenuScreen} />
      <Stack.Screen 
        name="FoodScreen"
        component={FoodScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen 
        name="ViewOrderScreen"
        component={ViewOrderScreen}
        options={{ title:'Your order' } }
        title='Your order'/>
      <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
    </Stack.Navigator>
  )
}

function EverythingStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="HomeScreen"
        options={{headerShown: false}}
        component={HomeScreen} />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen} />
      <Stack.Screen
        name="FoodScreen"
        component={FoodScreen}
        options={({ route }) => ({ title: route.params.name })}
        />
      <Stack.Screen 
        name="ViewOrderScreen"
        options={{ title:'Your order' } }
        title='Your order'
        component={ViewOrderScreen} />
      <Stack.Screen
        name="TrackOrderScreen"
        component={TrackOrderScreen} />
    </Stack.Navigator>
  )
}

function ProfileStack(){
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: true
      }}
    >
      <Stack.Screen 
        name="Hello, Johanna!"
        component={ProfileScreen}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <View style={{flex: 1 }}>
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
          }>
          <Tab.Screen name="Home" component={EverythingStack} />
          <Tab.Screen name="Menu" component={MenuStack} />
          <Tab.Screen name="Profile" component={ProfileStack} title="Hello, Johanna!"/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
