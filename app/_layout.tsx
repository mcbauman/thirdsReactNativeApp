// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }
import React from 'react';
import {Text, View, ScrollView, Image, TextInput} from 'react-native';

import MyFirstComponent from '@/components/MyFirstComponent';
import MyInputComponent from '@/components/MyInputComponent'

export default function YourApp(){
  return (
    <ScrollView
      style={{
        backgroundColor: 'rgba(52, 65, 94, 0.8)',
      }}>
      <Text
        style={{color:'white'}}>Some text</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgb(206, 134, 8)'
        }}>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
        />
      <MyInputComponent />
      <MyFirstComponent name='MCB' />
      <MyFirstComponent name='Babe' />
      </View>
      <TextInput
        style={{
          color:'white',
          height: 40,
          borderColor: 'white',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};
// const YourApp = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(255,0,0,1)'
//       }}>
//       <Text
//         style={{
//           color:'white',
//           fontSize: 'xx-large',
//           backgroundColor: 'rgba(50,50,50,0.5)'
//         }}
//         >Try editing me! 🎉</Text>
//     </View>
//   );
// };

