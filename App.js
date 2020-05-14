import React from 'react';
import { View, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
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
        component={MenuScreen}
        options={{
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      <Stack.Screen 
        name="ViewOrderScreen"
        options={{
          title: 'Your order',
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        title='Your order'
        component={ViewOrderScreen} />
      <Stack.Screen 
        name="TrackOrderScreen"
        options={{
          title: 'Order #123',
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        title='Order #123'
        component={TrackOrderScreen} />
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
        name="ViewOrderScreen"
        options={{
          title: 'Your order',
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        title='Your order'
        component={ViewOrderScreen} />
      <Stack.Screen 
        name="TrackOrderScreen"
        options={{
          title: 'Order #123',
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        title='Order #123'
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: '#1c1c1c',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#1c1c1c' }}>
      <StatusBar
        backgroundColor="#1c1c1c"
        barStyle="light-content"
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => (
          {
            tabBarIcon: ({ color, size }) => 
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
              activeTintColor: '#C11C10',
              inactiveTintColor: '#949494',
              style:{
                backgroundColor: '#000000',
                borderTopColor: "black"
              }
              
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
