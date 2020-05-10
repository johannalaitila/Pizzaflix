import React, { useState } from "react";
import { Picker, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FoodView from '../components/FoodView';
import IncomingOrderBar from '../components/IncomingOrderBar';
import ViewOrderBar from "../components/ViewOrderBar";

export default function MenuScreen( ) {
  
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [selectedDiet, setSelectedDiet] = useState("none");

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={{marginLeft: 13, width: 190 }}
      >
        <Picker.Item label="Filter by category" value="none"/>
        <Picker.Item label="Pizza" value="pizza"/>
        <Picker.Item label="Drink" value="drink"/>
      </Picker>
      <Picker
        selectedValue={selectedDiet}
        onValueChange={(itemValue) => setSelectedDiet(itemValue)}
        style={{marginLeft: -10, width: 170 }}
      >
        <Picker.Item label="Filter by diet" value="none"/>
        <Picker.Item label="Vegetarian" value="vegetarian"/>
        <Picker.Item label="Vegan" value="vegan"/>
        <Picker.Item label="Gluten free" value="glutenfree"/>
        <Picker.Item label="Keto" value="keto"/>
        <Picker.Item label="Hungover" value="hungover"/>
      </Picker>
      </View>
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.foodCategory}>
        <Text style={styles.foodCategoryText}>Pizzas</Text>
        <FoodView 
          name='Vegetariana' 
          toppings={['Mushrooms', 'Bell pepper', 'Onion', 'Pineapple']}
          price='8,50'
          vegetarian={true}
          />
        <FoodView
          name='Americana'
          toppings={['Ham', 'Pineapple', 'Blue cheese']}
          price='8,00'/>
      </View>   
      <View style={styles.foodCategory}>
        <Text style={styles.foodCategoryText}>Drinks</Text>
        <FoodView name='Water' description='0,25 dl' price='2,00'/>
      </View>       
    </ScrollView>
    <ViewOrderBar />
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
