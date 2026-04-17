import { StyleSheet } from 'react-native'

const LoginStyles = StyleSheet.create ({ 
   container:  {
      flex: 1
   },

   headerContainer: {
      position: 'relative',
      top: 0
   },

   mainContent: {
      flex: 2,
      justifyContent: 'center'
   },

   imageContainer: {
      marginBottom: 40
   },

   imageStyle: {
      width: '100%',
      height: 300,
   }
}); 

export default LoginStyles;