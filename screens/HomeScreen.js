import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import IncomingOrderBar from '../components/IncomingOrderBar';
import FoodView from '../components/FoodView';

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/splash.png')} style= {{width: undefined, height: 50, marginTop: 30} }resizeMode='contain' />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.foodCategory}>
            <Text style={styles.foodCategoryText}>Order Again</Text>
            <FoodView
              name='Fantasia'
              toppings={['Choose one', 'Choose one', 'Choose one', 'Choose one']}
              price='9,00'/>
            <FoodView
              name='Americana'
              toppings={['Ham', 'Pineapple', 'Blue cheese']}
              price='8,00'/>
          </View>
          <View style={styles.foodCategory}>
            <Text style={styles.foodCategoryText}>Recommended for you</Text>
            <FoodView 
              name='Speciale'
              toppings={['Tuna', 'Shrimp', 'Olives', 'Pineapple']}
              price='8,50'/>
            <FoodView 
              name='Kebab'
              toppings={['Kebab', 'Mayonnaise']}
              price='8,00'/>
          </View>    
          <View style={styles.foodCategory}>
            <Text style={styles.foodCategoryText}>The most popular</Text>
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
        <IncomingOrderBar />
      </View>
    );
  }

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
    },
    logo: {
      width: 250,
      height: 250
    }
  });
  