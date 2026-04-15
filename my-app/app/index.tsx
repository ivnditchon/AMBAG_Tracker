import { StyleSheet, Text, View,  Image, StyleProp, ImageSourcePropType, ViewStyle, ImageStyle } from 'react-native'
import React from 'react'
import HomeStyles from '../styles/index-style'
import ScreenTitle from '../components/screen-title/title'

type HomeProps = {
   imageContainer: StyleProp<ViewStyle>;
   source: ImageSourcePropType;
   imageStyle: StyleProp<ImageStyle>;
   resizeMode: 'cover' | 'contain' | 'repeat' | 'center';
};

const Home = () => {
   const imgProps: HomeProps = {
      imageContainer: HomeStyles.imageContainer,
      source: require('../assets/images/AMBaG-Logo.png'),
      imageStyle: HomeStyles.imageStyle,
      resizeMode: 'contain'
   };

   return (
      <View 
         style={HomeStyles.container}>
         <ScreenTitle 
            title='Holla, Welcome'
            subTitle='Lets get started'
         />
         {/** Logo section */}
         <View style={imgProps.imageContainer}>
            <Image 
               source={imgProps.source}
               style={imgProps.imageStyle}
               resizeMode={imgProps.resizeMode}
            />
         </View>
         {/** Button section */}
         <View>
            <Text>
               
            </Text>
         </View>
      </View>
   )
}

export default Home;
