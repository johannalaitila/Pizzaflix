import * as React from 'react';
import { Text, View, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import IncomingOrderBar from '../components/IncomingOrderBar';
import FoodView from '../components/FoodView';
import ViewOrderBar from '../components/ViewOrderBar';
import { Styles } from '../components/Styles';

export default function HomeScreen() {
  const splash = require('../assets/splash.png');
  
  return (
    <View style={Styles.container}>
      <Image source={splash} style= {Styles.homeHeaderLogo} resizeMode='contain' />
      <ScrollView style={Styles.container}>

        <View style={Styles.leftRightMargins}>
          <View style={Styles.row}>
            <Text style={Styles.categoryTextTopMargin}>Order Again </Text>
            <View style={Styles.alignRight}>
              <Button title="Login" />
            </View>
          </View>
          <FoodView
            name='Fantasia'
            toppings={['Select topping 1', 'Select topping 2', 'Select topping 3', 'Select topping 4']}
            price='9,00'/>
          <FoodView
            name='Americana'
            toppings={['Ham', 'Pineapple', 'Blue cheese']}
            price='8,00'/>
        </View>

        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>Recommended for you</Text>
          <FoodView 
            name='Speciale'
            toppings={['Tuna', 'Shrimp', 'Olives', 'Pineapple']}
            price='8,50'/>
          <FoodView 
            name='Kebab'
            toppings={['Kebab', 'Mayonnaise']}
            price='8,00'/>
        </View>    

        <View style={Styles.leftRightMargins}>
          <Text style={Styles.categoryText}>The most popular</Text>
          <FoodView
            name='Vegetariana'
            toppings={['Mushrooms', 'Bell pepper', 'Onion', 'Pineapple']}
            price='8,50'
            vegan={true}/>
          <FoodView
            name='Opera'
            toppings={['Ham', 'Tuna']}
            price='8,00'/>
          <FoodView
            name='Margharita'
            description='Double Cheese'
            price='7,50'/>
        </View>         
      </ScrollView>
      <ViewOrderBar/>
      <IncomingOrderBar />
    </View>
  );
}
