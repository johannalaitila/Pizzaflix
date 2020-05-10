import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Picker } from 'react-native';
import * as Order from '../components/Order.js';

export default function FoodScreen({ navigation, route} ) {
  let random = 1;
  const { name } = route.params;
  const { toppings } = route.params
  const { price } = route.params;
  const { vegan } = route.params;
  const { vegetarian } = route.params;

  const [whereToEat, setWhereToEat] = useState("none");

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.dietText}>
          {vegan ? 'Vegan ' : ''}
          {vegetarian ? 'Vegetarian ' : ''}
        </Text>
        <Text style={{fontWeight: 'bold'}}>{price} &euro;</Text>
      </View>
      <Text style={styles.descriptionText}>
          Additional description about the pizza is placed here. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      <View style={styles.row}>
        <View style={{width: 180}}>
        {toppings?.map((topping) => <Text>{topping}</Text>)} 
        </View>

        <Image source={ 
          random = Math.floor(Math.random() * 9) + 1,
          random === 1
          ? require('../assets/images/pizza1.jpg')
          : random === 2
          ? require('../assets/images/pizza2.jpg')
          : random === 3
          ? require('../assets/images/pizza3.jpg')
          : random === 4
          ? require('../assets/images/pizza4.jpg')
          : random === 5
          ? require('../assets/images/pizza5.jpg')
          : random === 6
          ? require('../assets/images/pizza6.jpg')
          : random === 7
          ? require('../assets/images/pizza7.jpg')
          : random === 8
          ? require('../assets/images/pizza8.jpg')
          : require('../assets/images/pizza9.jpg')
          } 
          style={styles.image}
          resizeMode='contain'/>
      </View>
      <View style={styles.row}>
          <Button title={"Edit"} buttonStyle={{marginTop: '50px'}} />
          <Text>  </Text>
          <Button title={"Set as favourite"} buttonStyle={styles.button}/>
      </View>
      <View style={styles.row}>
          <Text style={{fontWeight: 'bold'}}>Where do you want to eat?</Text>
          <Picker
            selectedValue={whereToEat}
            onValueChange={(itemValue) => setWhereToEat(itemValue)}
            style={{marginLeft: 0, width: 160 }}
          >
        <Picker.Item label="Choose" value="none"/>
        <Picker.Item label="At the restaurant" value="pizza"/>
        <Picker.Item label="Delivery" value="drink"/>
      </Picker>
      </View>
      <View style={styles.row}>
        <Button title={"-"} buttonStyle={styles.button}/>
        <Text>1  pcs</Text>
        <Button title={"+"} buttonStyle={styles.button}/>
        <Text> </Text>
        <Button
          title={"Add to order"}
          buttonStyle={styles.button}
          onPress={() => {
            Order.addToOrder(name, price)
            navigation.navigate('ViewOrderScreen')
        }}/>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
      margin: 10,
  },
  info:{
      margin: 10,
      width: 220
  },
  nameText:{
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5
  },
  imageContainer:{
      marginLeft: 'auto',
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10
      
  },
  image:{
      width: 150,
      height: 150
  },
  dietText:{
      color: 'green',
      fontWeight: 'bold'
  },
  descriptionText:{
      fontStyle: 'italic',
  },
  row:{
    flexDirection: 'row',
    marginTop: 5
  }
});
