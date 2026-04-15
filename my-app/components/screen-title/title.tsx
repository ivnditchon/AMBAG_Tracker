import { StyleSheet, Text, View, TextStyle, StyleProp } from 'react-native'
import React from 'react'
import TitleStyles from './title-style';

type ScreenTitleProps = {
   title: string;
   subTitle: string;
};

const ScreenTitle = ({ title, subTitle }: ScreenTitleProps) => {
  return (
      <View>
         <Text style={TitleStyles.title}>
            {title}
         </Text>
         <View>
            <Text style={TitleStyles.subTitle}>
               {subTitle}
            </Text>
         </View>
      </View>
   )
}

export default ScreenTitle;
