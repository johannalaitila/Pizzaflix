import React, { PropTypes, Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

var enabled = false;

const styles = StyleSheet.create({
    incomingOrderText:{
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
     
    },
    tabBarInfoContainer: {
      bottom: 0,
      left: 0,
      right: 0,
      ...Platform.select({
        ios: {
          shadowColor: 'black',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
        android: {
          elevation: 20,
        },
      }),
      alignItems: 'center',
      backgroundColor: '#fbfbfb',
      paddingVertical: 20,
    },
    tabBarInfoText: {
      fontSize: 17,
      color: 'rgba(96,100,109, 1)',
      textAlign: 'center',
    },
  });

export default function IncomingOrderBar(props){
  const navigation = useNavigation()
  if(!enabled) return(<View /> )
  else return(
      
      <View style={styles.tabBarInfoContainer}>
          <View style={{flexDirection:"row"}}>
          <View>
              <Text style={styles.incomingOrderText}>Your order will arrive in: 25 minutes</Text>
          </View>
          
          <View style={{marginBottom: 0, marginLeft: 10}}>
              <Button title="View" color="#841584" onPress={() => navigation.navigate('TrackOrderScreen')} />
          </View>
          </View>
      </View>
  )
}

export function setEnabled(isEnabled){
  enabled = isEnabled
}
