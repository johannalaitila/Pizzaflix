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
    <View style={styles.container} >
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={Styles.row}>
          <Text style={{fontSize: 20, marginLeft: 20, fontWeight: 'bold'}}>Hello, {UserInfo.getName()}!</Text>
          <View style={Styles.alignRight}><Button title='Log out'/></View>
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
        <Text style={{fontSize: 17, marginTop: 10, fontWeight: 'bold'}}>Order history</Text>
        
        <View
          style={{
            marginTop: 5,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.leftRightMargins}>
          <Text style={{marginTop: 10, fontSize: 15}}>13.5.2020 - Delivery</Text>
          <View style={Styles.row}>
            <View style={{marginLeft: 10}}>
              <Text>Water</Text>
            </View>
            <View style={Styles.alignRight}>
              <View style={{height: 50}}><Button title="Order again"/></View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 5,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.leftRightMargins}>
          <Text style={{marginTop: 10, fontSize: 15}}>17.3.2020 - Takeout</Text>
          <View style={Styles.row}>
            <View style={{marginLeft: 10}}>
              <Text>Beer</Text>
              <Text>Americana</Text>
              <Text>Vegetariana</Text>
              <Text>Opera</Text>
              <Text>Pepsi</Text>
            </View>
            <View style={Styles.alignRight}>
              <View style={{height: 50}}><Button title="Order again"/></View>
            </View>
          </View>
        </View>


        <View
          style={{
            marginTop: 5,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        />
        <View style={Styles.leftRightMargins}>
          <Text style={{marginTop: 10, fontSize: 15}}>17.3.2020 - Takeout</Text>
          <View style={Styles.row}>
            <View style={{marginLeft: 10}}>
              <Text>Fantasia</Text>
              <Text>Fantasia</Text>
              <Text>Speciale</Text>
              <Text>Pepsi</Text>
            </View>
            <View style={Styles.alignRight}>
              <View style={{height: 50}}><Button title="Order again"/></View>
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
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
