import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

var random = 0;

export default function FoodView( props ){
    const navigation = useNavigation()
    const toppings = props.toppings
    return (
        <View 
            style={styles.container} 
            onStartShouldSetResponder={() => {return true}}
            onResponderRelease={() => navigation.navigate('FoodScreen', {
                name: props.name,
                toppings: toppings,
                price: props.price,
                vegan: props.vegan,
                vegetarian: props.vegetarian
            })}
            >
          <View style={styles.info}>
            <Text style={styles.nameText}>{props.name}</Text>
            {toppings?.map((topping) => <Text style={styles.descriptionText}>{topping}</Text>)}
            <View style={{flexDirection: 'row'}}>
                <Text style={{marginTop: 5, marginRight: 5}}>{props.price} &euro;</Text>
                <Text style={styles.dietText}>
                    {props.vegan ? 'Vegan ' : ''}
                    {props.vegetarian ? 'Vegetarian ' : ''}
                </Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
              
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
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        margin: 10,
        marginRight: 10,
        backgroundColor: 'orange'
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
        width: 100,
        height: 100
    },
    dietText:{
        fontWeight: 'bold',
        marginTop: 5,
        color: 'green'
    },
    descriptionText:{
        fontStyle: 'italic',
    }

});
