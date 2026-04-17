import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LoginStyles from '../styles/login-style'
import Header  from '../components/header/header'
import ScreenTitle from '../components/screen-title/title'

const Login = () => {
   return (
      <View
         style={LoginStyles.container}>
         {/** Header */}
         <View style={LoginStyles.headerContainer}>
            <Header />
         </View>
         {/** Main content */}
         <View 
            style={LoginStyles.mainContent}
         >
            <View style={LoginStyles.imageContainer}>
               <Image 
                  source={require('../assets/images/Authentication-rafiki.png')}
                  resizeMode='cover'
                  style={LoginStyles.imageStyle}
               />
            </View>
            <ScreenTitle 
               title='Welcome Back!'
               subTitle='Sign in to access your dashboard  and features'
            />
         </View>
      </View>
   );
}

export default Login
