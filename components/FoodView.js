import React, {useState} from 'react';
import { Image, Text, View, Button, addons } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Styles } from './Styles';
import { addToOrder } from './Order';

function chooseRandomImage(){
    let random = 1
    let image
    const image1 = require('../assets/images/pizza1.jpg')
    const image2 = require('../assets/images/pizza2.jpg')
    const image3 = require('../assets/images/pizza3.jpg')
    const image4 = require('../assets/images/pizza4.jpg')
    const image5 = require('../assets/images/pizza5.jpg')
    const image6 = require('../assets/images/pizza6.jpg')
    const image7 = require('../assets/images/pizza7.jpg')
    const image8 = require('../assets/images/pizza8.jpg')
    const image9 = require('../assets/images/pizza9.jpg')
    
    random = Math.floor(Math.random() * 9) + 1,

    random === 1
    ? image = image1
    : random === 2
    ? image = image2
    : random === 3
    ? image = image3
    : random === 4
    ? image = image4
    : random === 5
    ? image = image5
    : random === 6
    ? image = image6
    : random === 7
    ? image = image7
    : random === 8
    ? image = image8
    : image = image9
    
    return image
}

function minimizedView(name, toppings, price, vegan, vegetarian){
    return(
        <View style={Styles.foodViewInfoContainer}>
            {toppings?.map((topping) => <Text key={topping}>{topping}</Text>)}
            <View style={Styles.row}>
                <Text>{price} &euro; </Text>
                <Text style={Styles.dietText}>
                    {vegan ? 'Vegan ' : ''}
                    {vegetarian ? 'Vegetarian ' : ''}
                </Text>
            </View>
        </View>
    )
}

function expandedView(name, toppings, price, vegan, vegetarian){
    return(
        <View style={Styles.foodViewInfoContainer}>
            {toppings?.map((topping) => <Text key={topping}>{topping}</Text>)}
        </View>
    )
}

function expandedViewTitle(name, price, vegan, vegetarian){
    return( 
        <View>
            <View style={Styles.row}>
                <Text style={Styles.foodNameText}>{name}</Text>
                <View style={Styles.alignRight}>
                    <Text style={{marginTop: 5, marginRight: 5}}>{price} &euro;</Text>
                </View>
            </View>
            <Text style={Styles.dietText}>
                        {vegan ? 'Vegan ' : ''}
                        {vegetarian ? 'Vegetarian ' : ''}
                    </Text>
            <Text style={Styles.italicText}>
                Additional description about the pizza is placed here. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </View>
    )
}

export default function FoodView( props ){
    const [expanded, setExpanded] = useState(false)
    const [orderAmountValue, onAmountTextChange] = React.useState('1');
    
    const addToCart = () => {
        const orderItem = {name: props.name, price: props.price};
        addToOrder(props.name, props.price)
    }

    function expandedViewButtons(){
        return(
            <View>
                <View style={Styles.row}>
                    <View style={{ width: "45%"}}>
                        <Button
                        title="Edit"
                        color="#FF3D00"
                        />
                    </View>
                    <View style={{ width: "50%", marginLeft: 15}}>
                        <Button
                        title="Set as favourite"
                        color="#FF3D00"
                        />
                    </View>
                </View>
                <View style={Styles.row}>
                    <TextInput
                        style={Styles.orderAmountTextInput}
                        onChangeText={text => onAmountTextChange(text)}
                        value={orderAmountValue}
                    />
                    <Text style={{marginTop: 10}}> pcs </Text>
                    <Button title="+" />
                    <View style={Styles.alignRight}>
                    <View style={{ width: "75%" }}>
                        <Button
                            title="Add to Order"
                            color="#FF3D00"
                            onPress={addToCart}
                        />
                    </View> 
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View 
            style={Styles.foodViewContainer} 
            onStartShouldSetResponder={() => {return true}}
            onResponderRelease={() => { setExpanded(!expanded) }}>
            
            {expanded ? 
            expandedViewTitle(props.name, props.price, props.vegan, props.vegetarian) 
            : <Text style={Styles.foodNameText}>{props.name}</Text>}

            <View style={Styles.row}>
                {expanded ? 
                    expandedView(props.name, props.toppings, props.price, props.vegan, props.vegetarian)
                    : minimizedView(props.name, props.toppings, props.price, props.vegan, props.vegetarian)
                }
            
                <View style={Styles.foodViewImageContainer}>
                    <Image source={chooseRandomImage()} 
                    style={Styles.foodViewImage}
                    resizeMode='contain'/>
                </View>
            </View>

            {expanded? expandedViewButtons() : null}

        </View>
    );
}
