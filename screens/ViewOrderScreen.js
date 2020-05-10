import * as React from 'react';
import * as Order from '../components/Order.js';
import { Text, View } from 'react-native';

export default function ViewOrderScreen() {
  let order = Order.getItems()

  return (
    <View>
      {order?.map((item) => <Text>Item: {item}</Text>)} 
    </View>
  );
}
