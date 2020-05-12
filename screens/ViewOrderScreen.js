import * as React from 'react';
import * as Order from '../components/Order.js';
import { Text, View, Button } from 'react-native';
import { Styles } from '../components/Styles';

export default function ViewOrderScreen() {
  let order = Order.getOrder()
  let list = []

  function listOrder(){
    for (let i = 0; i < order.length; i++) {
        list.push(
          <View style={Styles.row}>
            <Text>Name:{order[i][0]} Price: {order[i][1]}</Text>
            <Button title="Edit" />
        </View>
        );
    }
    return list
  }

  return (
    <View>
      {listOrder()}
    </View>
  );
}
