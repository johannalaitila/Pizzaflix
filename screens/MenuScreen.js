import React, { useState } from "react";
import { Picker, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FoodView from '../components/FoodView';
import IncomingOrderBar from '../components/IncomingOrderBar';


export default function MenuScreen( {navigation} ) {
  let random = 1;
  
  const [selectedValue, setSelectedValue] = useState("none");
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        style={{marginLeft: 20, marginRight: 20, width: 250 }}
      >
        <Picker.Item label="Filter pizzas by diet" value="none"/>
        <Picker.Item label="Vegetarian" value="vegetarian"/>
        <Picker.Item label="Vegan" value="vegan"/>
        <Picker.Item label="Gluten free" value="glutenfree"/>
        <Picker.Item label="Keto" value="keto"/>
        <Picker.Item label="Hungover" value="hungover"/>
      </Picker>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.foodCategory}>
        <Text style={styles.foodCategoryText}>Pizzas</Text>
        <FoodView name='Vegetariana' description='Mushrooms, Bell pepper, Onion, Pineapple' price='8,50'/>
        <FoodView name='Americana' description='Ham, Pineapple, Blue cheese' price='8,00'/>
        <FoodView name='Vegetariana' description='Mushrooms, Bell pepper, Onion, Pineapple' price='8,50'/>
        <FoodView name='Americana' description='Ham, Pineapple, Blue cheese' price='8,00'/>
      </View>   
      <View style={styles.foodCategory}>
        <Text style={styles.foodCategoryText}>Drinks</Text>
        <FoodView name='Water' description='0,25 dl' price='2,00'/>
      </View>       
    </ScrollView>
    <IncomingOrderBar />
  </View>
  );
}

MenuScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  foodCategory: {
    margin: 10
  },
  foodCategoryText:{
    fontWeight: 'bold',
    marginLeft: 10
  }
});
