import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create  ({
   container:  {
      flex: 1,
      justifyContent: 'center'
   },

   // Image
   imageContainer: {
      marginBottom: 45
   },

   imageStyle:  {
      width: '100%',
      height: 300
   },

   buttonContainer: {
      marginTop: 45
   },

   footerTextContainer: {
      marginTop: 75,
      alignItems: 'center'
   },

   footerText: {
      fontFamily: 'InterMedium',
      fontSize: 14,
      color: '#2C2C2C',
      opacity: 0.8
   }
   
   // Label
});

export default HomeStyles;