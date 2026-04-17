import { Text, View,  Image, StyleProp, ImageSourcePropType, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import React from 'react'
import HomeStyles from '../styles/index-style'
import ScreenTitle from '../components/screen-title/title'
import Button from '../components/button/button'
import { useRouter } from 'expo-router'

type HomeProps = [
   {
      source: ImageSourcePropType;
      imageStyle: StyleProp<ImageStyle>;
      resizeMode: 'cover' | 'contain' | 'repeat' | 'center';
   },
   {
      footerTextContainer: StyleProp<ViewStyle>;
      footerText: string;
      footerTextStyle: StyleProp<TextStyle>;
   }
];

const Home = () => {
   const router = useRouter(); // Hook for navigation -> login screen

   const imgProps: HomeProps[0] = {
      source: require('../assets/images/Hello-rafiki.png'),
      imageStyle: HomeStyles.imageStyle,
      resizeMode: 'cover'
   };

   const footerTextProps: HomeProps[1] = {
      footerTextContainer: HomeStyles.footerTextContainer,
      footerText: 'Please contact admin if you cant log in',
      footerTextStyle: HomeStyles.footerText
   };

   /** Login form */
   const LoginScreen = () => {
      router.push('/login');
   };

   return (
      <View 
         style={HomeStyles.container}>
         {/** Logo section */}
         <Image 
            source={imgProps.source}
            style={imgProps.imageStyle}
            resizeMode={imgProps.resizeMode}
         />
         <ScreenTitle 
            title='Welcome AMBaG PMO'
            subTitle='Manage your tasks, track performance with ease and stay organized and keep everything in one place'
         />
         {/** Button section */}
         <View 
            style={HomeStyles.buttonContainer}>
            <Button 
               title='Login'
               onPress={LoginScreen}
            />
         </View>
         {/** Footer text */}
         <View 
            style={footerTextProps.footerTextContainer}>
            <Text
               style={footerTextProps.footerTextStyle}>
               {footerTextProps.footerText}
            </Text>
         </View>
      </View>
   )
}

export default Home;




/** (main) folder is  for authenticated screen after login like Dashboard, reports, add report and etc. So  the  Login screen must be outside (main) folder  */
