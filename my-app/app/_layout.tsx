import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const RootLayout = () => {
   const [loaded] = useFonts({
      InterRegular: require('../assets/fonts/Inter_24pt-Regular.ttf'),
      InterMedium: require('../assets/fonts/Inter_24pt-Medium.ttf'),
      InterSemiBold: require('../assets/fonts/Inter_24pt-SemiBold.ttf'),
      InterBold: require('../assets/fonts/Inter_24pt-Bold.ttf'),
      InterBlack: require('../assets/fonts/Inter_24pt-Black.ttf'),
   });

   if (!loaded) return null;

   return (
      <SafeAreaView style={{ 
         flex: 1, 
         paddingVertical: 15, 
         paddingHorizontal: 35, 
         justifyContent: 'center', 
         backgroundColor: '#FFFFFF' 
      }}>
         <Slot />
      </SafeAreaView>
   );
}

export default RootLayout;
