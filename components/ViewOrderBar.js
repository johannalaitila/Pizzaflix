import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getItemCount } from './Order';

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

export default function ViewOrderBar(props){
  const navigation = useNavigation()
  if(!enabled) return(<View /> )
  else return(
      
      <View style={styles.tabBarInfoContainer}>
          <View style={{flexDirection:"row"}}>
          <View>
              <Text style={styles.incomingOrderText}>You have {getItemCount()} items in your order</Text>
          </View>
          
          <View style={{marginBottom: 0, marginLeft: 10}}>
              <Button title="View" color="#841584" onPress={() => navigation.navigate('ViewOrderScreen')} />
          </View>
          </View>
      </View>
  )
}

export function setOrderBarEnabled(isEnabled){
  //enabled = isEnabled
  //alert('Bar' + enabled)
}