import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    /* COMMON STYLES */

    // Containers 
    container: {
      flex: 1,
      backgroundColor: '#1c1c1c',
      color: '#fff'
    },
    leftRightMargins:{
      marginLeft: 10,
      marginRight: 10,
      backgroundColor: '#1c1c1c'
    },
    row:{
      flexDirection: 'row',
      marginTop: 5
    },
    rowCell:{
      flex: 1,
    },
    rowMargin20:{
      flexDirection: 'row',
      margin: 10
    },
    alignRight:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginRight: 10
    },
    headerStyle:{
      backgroundColor: "#1c1c1c"
    },

    // Labels 
    categoryText:{
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 10,
      color: 'white'
    },
    categoryTextTopMargin:{
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 10,
      marginTop: 10,
      color: 'white'
    },

    /* COMPONENTS */

    // FoodView
    foodViewContainer:{
      margin: 10,
      marginRight: 10,
      padding: 10,
      backgroundColor: '#505050',
      borderRadius: 20
    },
    foodViewInfoContainer:{
        flex: 2.2,
    },
    foodViewImageContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    foodNameText:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    foodViewImage:{
        width: 100,
        height: 100,
        borderRadius: 40
    },
    dietText:{
        fontWeight: 'bold',
        color: '#09b542'
    },
    italicText:{
        fontStyle: 'italic',
        color: 'white'
    },
    whiteText:{
      color: 'white'
    },
    orderAmountTextInput: {
      paddingLeft: 10,
      paddingRight: 10,
      height: 40, 
      width: 50,
      borderColor: 'gray',
      borderWidth: 1,
      color: 'white',
      backgroundColor: '#666565'
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
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      borderColor: 'gray',
      borderWidth: 1,
      color: 'white',
      backgroundColor: '#505050',
      borderRadius: 5
    },
    foodSearchTextInput: {
      marginRight: 10,
      marginLeft: 10,
      paddingLeft: 10,
      height: 40, 
      width: 240,
      borderColor: 'gray',
      borderWidth: 1 ,
      color: 'white',
      backgroundColor: '#505050',
      borderRadius: 5
    },

    //ProfileScreen
    historyOrder:{
      margin: 10,
      paddingLeft: 10,
      paddingBottom: 10,
      backgroundColor: '#505050',
      borderRadius: 5
    },
  }
);
