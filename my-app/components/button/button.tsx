import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import ButtonStyles from './button-style'

type ButtonProps = {
   title: string;
   onPress: () => void;
};

const Button = ({  title, onPress }: ButtonProps) => {
   return (
      <Pressable 
         style={({ pressed }) => [
            ButtonStyles.button,
            {
               transform: [{ scale: pressed ? 0.97 : 1 }],
               backgroundColor: pressed  ? '#003296' : '#185BE6'
            }
         ]}
         onPress={onPress}
         >
         <Text style={ ButtonStyles.title }>
            { title }
         </Text>
      </Pressable>
   )
}

export default Button;