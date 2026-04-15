import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = () => {
   const [loaded] = useFonts({
      SFProTextRegular: require('../assets/fonts/SF-Pro-Text-Regular.otf'),
      SFProDisplaySemibold: require('../assets/fonts/SF-Pro-Display-Semibold.otf'),
      SFProDisplayBold: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
   });

   if (!loaded) return null;

   return (
      <SafeAreaView style={{ flex: 1, padding: 35, justifyContent: 'center'}}>
         <Slot />
      </SafeAreaView>
   );
}

export default RootLayout;
