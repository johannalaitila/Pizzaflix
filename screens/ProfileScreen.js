import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import IncomingOrderBar from '../components/IncomingOrderBar';
import ViewOrderBar from '../components/ViewOrderBar';
import { Styles } from "../components/Styles";
import * as UserInfo from "../components/UserInfo.js";


export default function ProfileScreen() {
  return (
    <View style={Styles.container} >
      <ScrollView style={Styles.container}>
        <View style={Styles.row}>
          <Text style={{fontSize: 20, marginLeft: 20, fontWeight: 'bold', color: 'white'}}>Hello, {UserInfo.getName()}!</Text>
          <View style={Styles.alignRight}><Button title='Log out' color="#6F6F6F"/></View>
        </View>
        <OptionButton
          icon="md-home"
          label="Edit contact information"
        />

        <OptionButton
          icon="md-card"
          label="Add/Edit payment information"
          isLastOption
        />

        <View style={Styles.leftRightMargins}>
          <Text style={{fontSize: 17, margin: 10, fontWeight: 'bold', color: 'white'}}>Order history</Text>
          <View style={Styles.historyOrder}>
            <Text style={{marginTop: 10, fontSize: 15, color: 'white'}}>13.5.2020 - Delivery</Text>
            <View style={Styles.row}>
              <View style={{marginLeft: 10}}>
                <Text style={Styles.whiteText}>Water</Text>
              </View>
              <View style={Styles.alignRight}>
                <View style={{height: 50}}><Button title="Order again" color="#6F6F6F"/></View>
              </View>
            </View>
          </View>

          <View style={Styles.historyOrder}>
            <Text style={{marginTop: 10, fontSize: 15, color: 'white'}}>17.3.2020 - Takeout</Text>
            <View style={Styles.row}>
              <View style={{marginLeft: 10}}>
                <Text style={Styles.whiteText}>Beer</Text>
                <Text style={Styles.whiteText}>Americana</Text>
                <Text style={Styles.whiteText}>Vegetariana</Text>
                <Text style={Styles.whiteText}>Opera</Text>
                <Text style={Styles.whiteText}>Pepsi</Text>
              </View>
              <View style={Styles.alignRight}>
                <View style={{height: 50}}><Button title="Order again" color="#6F6F6F"/></View>
              </View>
            </View>
          </View>

          <View style={Styles.historyOrder}>
            <Text style={{marginTop: 10, fontSize: 15, color: 'white'}}>17.3.2020 - Takeout</Text>
            <View style={Styles.row}>
              <View style={{marginLeft: 10}}>
                <Text style={Styles.whiteText}>Fantasia</Text>
                <Text style={Styles.whiteText}>Fantasia</Text>
                <Text style={Styles.whiteText}>Speciale</Text>
                <Text style={Styles.whiteText}>Pepsi</Text>
              </View>
              <View style={Styles.alignRight}>
                <View style={{height: 50}}><Button title="Order again" color="#6F6F6F"/></View>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>
      <ViewOrderBar/>
      <IncomingOrderBar />
    </View>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row'}}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(255,255,255,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#505050',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
    borderRadius: 5
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
    color: 'white'
  },
});
