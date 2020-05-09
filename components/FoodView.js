import React, { PropTypes, Component } from 'react';
import { TouchableHighlight, Image, Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

var random = 0;

export default function FoodView( props ){
    const navigation = useNavigation()
    return (
        <View 
            style={styles.container} 
            onStartShouldSetResponder={() => {return true}}
            onResponderRelease={() => navigation.navigate('ViewOrderScreen')}
            >
          <View style={styles.info}>
            <Text style={styles.nameText}>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text>{props.price} &euro;</Text>
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
        fontWeight: 'bold'
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
    }

});
