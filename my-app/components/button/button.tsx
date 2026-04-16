import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ButtonStyles from './button-style'

type ButtonProps = {
   title: string;
   onPress: () => void;
};

const Button = ({title, onPress}: ButtonProps) => {
   return (
      <TouchableOpacity 
         style={ButtonStyles.button}
         onPress={onPress}
         >
         <Text style={ButtonStyles.title}>
            {title}
         </Text>
      </TouchableOpacity>
   )
}

export default Button;