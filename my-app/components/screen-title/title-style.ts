import { StyleSheet } from 'react-native';

const  TitleStyles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      justifyContent: 'center'
   },

   title:  {
      fontFamily: 'InterBold',
      color: '#2C2C2C',
      fontSize: 36,
      letterSpacing: 0.1,
   },
   
   subTitleContainer: {
      marginTop: 20,
      alignItems: 'center'
   },

   subTitle: {
      textAlign: 'center',
      lineHeight: 25,
      fontFamily: 'InterMedium',
      color: '#2C2C2C',
      fontSize: 16,
      letterSpacing: 0.1,
      opacity: 0.5
   }
});

export default TitleStyles;