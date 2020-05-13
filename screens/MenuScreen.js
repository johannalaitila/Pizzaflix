import React, { useState } from "react";
import { Picker, Text, View, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FoodView, { DrinkView } from '../components/FoodView';
import IncomingOrderBar from '../components/IncomingOrderBar';
import ViewOrderBar from "../components/ViewOrderBar";
import { Styles } from "../components/Styles";

export default function MenuScreen( ) {
  
  const [selectedCategory, setSelectedCategory] = useState("none");
  const [selectedDiet, setSelectedDiet] = useState("none");
  const [searchValue, onSearchTextChange] = React.useState('');

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.container}>
        <View style={Styles.foodFilterDropdown}>
          <Picker
            selectedValue={selectedDiet}
            onValueChange={(itemValue) => setSelectedDiet(itemValue)}>
              <Picker.Item label="Filter by diet" value="none"/>
              <Picker.Item label="Vegetarian" value="vegetarian"/>
              <Picker.Item label="Vegan" value="vegan"/>
              <Picker.Item label="Gluten free" value="glutenfree"/>
              <Picker.Item label="Keto" value="keto"/>
              <Picker.Item label="Hungover" value="hungover"/>
          </Picker>
        </View>
        <View style={Styles.foodFilterDropdown}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}>
              <Picker.Item label="Filter by category" value="none"/>
              <Picker.Item label="Pizza" value="pizza"/>
              <Picker.Item label="Drink" value="drink"/>
          </Picker>
        </View>
        
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
            toppings={['Mozzarella', 'Tomato', 'Onion']}
            price={8.50}
            vegetarian={true}
            />
          <FoodView
            name='Americana'
            toppings={['Ham', 'Pineapple', 'Blue cheese']}
            price={8.00}/>
          <FoodView
            name='Fantasia'
            toppings={['Select topping 1', 'Select topping 2', 'Select topping 3', 'Select topping 4']}
            price={9.00}/>
          <FoodView
            name='Vegan'
            toppings={['Mushrooms', 'Bell pepper', 'Onion', 'Pineapple']}
            price={8.50}
            vegan={true}/>
          <FoodView
            name='Opera'
            toppings={['Ham', 'Tuna']}
            price={8.00}/>
          <FoodView
            name='Margherita'
            toppings={['Double Cheese']}
            price={7.50}/>
          <FoodView 
            name='Speciale'
            toppings={['Tuna', 'Shrimp', 'Olives', 'Pineapple']}
            price={8.50}/>
          <FoodView 
            name='Kebab'
            toppings={['Kebab', 'Extra kebab', 'Mayonnaise']}
            price={8.00}/>
        </View>   
        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Drinks</Text>
          <DrinkView name='Water' toppings={['0,25 l']} price={1.00}/>
          <DrinkView name='Pepsi' toppings={['0,33 l']} price={2.00}/>
          <DrinkView name='Beer' toppings={['0,5 l']} price={4.00}/>
        </View>       
      </ScrollView>
      <ViewOrderBar />
      <IncomingOrderBar />
    </View>
  );
}
