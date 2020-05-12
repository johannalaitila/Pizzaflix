import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    /* Containers */
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

    /* Labels*/
    categoryText:{
      fontWeight: 'bold',
      marginLeft: 10
    },
    categoryTextTopMargin:{
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 10
    },
    /* HomeScreen */
    homeHeaderLogo: {
      width: undefined,
      height: 50, 
      marginTop: 30
    },

    /* MenuScreen */
    foodFilterDropdown: {
      marginLeft: 10,
      //width: 190 
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
