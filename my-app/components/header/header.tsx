import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import HeaderStyles from './header-style'
import { router } from 'expo-router'

const Header = () => {
   const HandlePress = () => {
      router.back();
   }

   return (
      <TouchableOpacity 
         style={ HeaderStyles.container }
         onPress={HandlePress}
      >
         <Ionicons name="chevron-back-outline" size={ 18 } color="#2C2C2C" />
         <View style={ HeaderStyles.textContainer }>
            <Text 
               style={ HeaderStyles.text } 
            >
               Back
            </Text>
         </View>
      </TouchableOpacity>
   )
}

export default Header;
