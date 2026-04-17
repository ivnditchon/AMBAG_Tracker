import { StyleSheet } from 'react-native'

const HeaderStyles = StyleSheet.create ({
   container: {
      flexDirection: 'row',
      alignItems: 'center'
   },

   textContainer: {
      marginLeft: 5
   },

   text: {
      fontFamily: 'InterMedium',
      fontSize:  16,
      color: '#2C2C2C'
   }
});

export default HeaderStyles;