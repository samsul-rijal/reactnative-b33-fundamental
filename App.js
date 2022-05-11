import React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from "native-base";

// Import font with Expo
import {
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
  useFonts,
} from '@expo-google-fonts/balsamiq-sans'
import AppLoading from "expo-app-loading";

// Import Container
import Container from './Container'

export default function App() {
  // Load Font with Expo
  let [fonstLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic
  })

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: 'BalsamiqSans_400Regular',
        italic: 'BalsamiqSans_400Regular_Italic'
      }
    }
  }

  // Setup Theme
  const customeColor =  {
    primary: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    }
  }

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    font: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: {
      initialColorMode: 'dark'
    }
  })

  if(!fonstLoaded){
    return <AppLoading />
  } else {
    return (
      // Setup Provider
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
