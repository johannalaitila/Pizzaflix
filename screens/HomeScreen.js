import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import IncomingOrderBar from '../components/IncomingOrderBar';
import FoodView from '../components/FoodView';

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/splash.png')} style= {{width: undefined, height: 50} }resizeMode='contain' />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.foodCategory}>
            <Text style={styles.foodCategoryText}>Order Again</Text>
            <FoodView name='Fantasia' description='Choose your own' price='9,00'/>
            <FoodView name='Americana' description='Ham, Pineapple, Blue cheese' price='8,00'/>
          </View>
          <View style={styles.foodCategory}>
            <Text style={styles.foodCategoryText}>Recommended for you</Text>
            <FoodView name='Speciale' description='Tuna, Shrimp, Olives, Pineapple' price='8,50'/>
            <FoodView name='Kebab' description='Kebab, Mayonnaise' price='8,00'/>
          </View>    
          <View style={styles.foodCategory}>
            <Text style={styles.foodCategoryText}>The most popular</Text>
            <FoodView name='Vegetariana' description='Mushrooms, Bell pepper, Onion, Pineapple' price='8,50'/>
            <FoodView name='Opera' description='Ham, Tuna' price='8,00'/>
            <FoodView name='Margharita' description='Double Cheese' price='7,50'/>
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
  