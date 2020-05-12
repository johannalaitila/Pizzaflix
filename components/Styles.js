import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    /* COMMON STYLES */

    // Containers 
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    leftRightMargins:{
      marginLeft: 10,
      marginRight: 10
    },
    row:{
      flexDirection: 'row',
      marginTop: 5
    },
    rowMargin20:{
      flexDirection: 'row',
      margin: 20
    },
    alignRight:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 10
    },

    // Labels 
    categoryText:{
      fontWeight: 'bold',
      marginLeft: 10
    },
    categoryTextTopMargin:{
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 10
    },

    /* COMPONENTS */

    // FoodView
    foodViewContainer:{
      margin: 10,
      marginRight: 10,
      padding: 10,
      backgroundColor: 'orange'
    },
    foodViewInfoContainer:{
        flex: 2.2,
    },
    foodViewImageContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    foodNameText:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    foodViewImage:{
        width: 100,
        height: 100
    },
    dietText:{
        fontWeight: 'bold',
        color: 'green'
    },
    italicText:{
        fontStyle: 'italic',
    },
    orderAmountTextInput: {
      paddingLeft: 10,
      paddingRight: 10,
      height: 40, 
      width: 50,
      borderColor: 'gray',
      borderWidth: 1 
    },

    /* SCREENS */
    // HomeScreen
    homeHeaderLogo: {
      width: undefined,
      height: 50, 
      marginTop: 30
    },

    // MenuScreen
    foodFilterDropdown: {
      marginLeft: 10
    },
    foodSearchTextInput: {
      paddingLeft: 10,
      paddingRight: 10,
      height: 40, 
      width: 250,
      borderColor: 'gray',
      borderWidth: 1 
    }
  }
);
