import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Styles } from '../components/Styles';

export default function TrackOrderScreen() {
  const map = require('../assets/images/map.jpg')
  return (
    <View style={Styles.container}>
      <View style={Styles.leftRightMargins}>
        <Text style={{fontSize: 15, marginTop: 20, fontWeight: 'bold', color: 'white'}}>Thank you for ordering out pizza!</Text>
        <Text style={{fontSize: 15, color: 'white'}}>
          Your order will be delivered in 25 minutes.
          We have some delays at the moment.
        </Text>
        <Text style={{marginTop: 40, fontWeight: 'bold', color: 'white'}}>Track your delivery in real-time:</Text>
        <Image source={map} style={{width: '100%', height: 300}} resizeMode='contain'/>
      </View>
    </View>
  );
}
