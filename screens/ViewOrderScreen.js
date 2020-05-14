import React, { useState } from "react";
import * as Order from '../components/Order.js';
import { Text, View, Button, Picker } from 'react-native';
import { Styles } from '../components/Styles';
import { TextInput, ScrollView } from "react-native-gesture-handler";
import * as UserInfo from "../components/UserInfo.js";

export default function ViewOrderScreen({navigation}) {

  const [whereToEat, setWhereToEat] = useState("none");

  let order = Order.getOrder()
  let list = []

  function listOrder(){
    for (let i = 0; i < order.length; i++) {
        list.push(
          <View style={Styles.row} key={i}>
            <View style={{flex: 3}}>
              <Text key={i} style={{marginTop: 5, color: 'white'}}>{order[i][0]} - {order[i][1]}&euro;</Text>
            </View>
            <View style={{flex: 0.5, marginRight: 25}}>
            <TextInput
              value='1'
              style={Styles.orderAmountTextInput}

            />
            </View>
            <View style={{flex: 0.5}}>
              <Text style={{marginTop: 5, color: 'white'}}> pcs </Text>
            </View>
            <View style={Styles.rowCell}>
              <Button title="Edit" />
            </View>
        </View>
        );
    }
    return list
  }

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.leftRightMargins}>
        {listOrder()}
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#505050',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.row}>
          <View style={Styles.rowCell}>
            <Text style={Styles.whiteText}>Total: {Order.getOrderTotal()}&euro;</Text>
          </View>
        </View>
        <View style={Styles.row}>
          <View style={{borderColor: 'gray', borderWidth: 1, width: '100%'}}>
            <Picker
              selectedValue={whereToEat}
              onValueChange={(itemValue) => setWhereToEat(itemValue)}
              style={{marginLeft: 0, width: '100%',
              borderColor: 'gray',
              borderWidth: 1,
              color: 'white'}}>
              <Picker.Item label="Where do you want to eat?" value="none"/>
              <Picker.Item label="At the restaurant" value="pizza"/>
              <Picker.Item label="Delivery" value="drink"/>
            </Picker>
          </View>
        </View>

        <View style={Styles.row}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Delivery address</Text>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 2}}>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getAddress()}</Text>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getZipCode()} {UserInfo.getCity()}</Text>
          </View>
          <View style={Styles.rowCell}>
            <Button title="Change" />
          </View>
        </View>

        <View style={Styles.row}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Contact information</Text>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 2}}>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getPhone()}</Text>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getEmail()}</Text>
          </View>
          <View style={Styles.rowCell}>
            <Button title="Change" />
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#505050',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.row}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>Payment method</Text>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 2}}>
            <Text style={{marginTop: 5, color: 'white'}}>{UserInfo.getPayment()}</Text>
          </View>
          <View style={Styles.rowCell}>
            <Button title="Change" />
          </View>
        </View>
        <View style={Styles.row}>
          <View style={{flex: 1}} />
          <View style={{flex: 1, marginTop: 20, marginBottom: 20}}>
            <Button title="Order" 
            onPress={() => {
              navigation.navigate('TrackOrderScreen')
          }}/>
          </View>
          <View style={{flex: 1}} />
        </View>
      </ScrollView>
    </View>
  );
}
