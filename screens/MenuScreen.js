import React, { useState } from "react";
import { Picker, Text, View, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FoodView from '../components/FoodView';
import IncomingOrderBar from '../components/IncomingOrderBar';
import ViewOrderBar from "../components/ViewOrderBar";
import { Styles } from "../components/Styles";

export default function MenuScreen( ) {
  
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [selectedDiet, setSelectedDiet] = useState("none");
  const [searchValue, onSearchTextChange] = React.useState('Useless Placeholder');

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.container}>
      <Picker
            selectedValue={selectedDiet}
            onValueChange={(itemValue) => setSelectedDiet(itemValue)}
            style={Styles.foodFilterDropdown}>
            <Picker.Item label="Filter by diet" value="none"/>
            <Picker.Item label="Vegetarian" value="vegetarian"/>
            <Picker.Item label="Vegan" value="vegan"/>
            <Picker.Item label="Gluten free" value="glutenfree"/>
            <Picker.Item label="Keto" value="keto"/>
            <Picker.Item label="Hungover" value="hungover"/>
          </Picker>
        <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={Styles.foodFilterDropdown}>
            <Picker.Item label="Filter by category" value="none"/>
            <Picker.Item label="Pizza" value="pizza"/>
            <Picker.Item label="Drink" value="drink"/>
        </Picker>
        <View style={Styles.rowMargin20}>
        <TextInput
          style={Styles.foodSearchTextInput}
          onChangeText={text => onSearchTextChange(text)}
          value={searchValue}
        />
          <Button title="Search" />
        </View>

        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Pizzas</Text>
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
        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Drinks</Text>
          <FoodView name='Water' description='0,25 dl' price='2,00'/>
        </View>       
      </ScrollView>
      <ViewOrderBar />
      <IncomingOrderBar />
    </View>
  );
}
