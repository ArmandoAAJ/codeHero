import React from 'react';
import {useFonts} from 'expo-font';
import {Roboto_900Black, Roboto_300Light} from '@expo-google-fonts/roboto';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/pages/Home';

import './src/config/ReactotronConfig';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_900Black
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
      
    </>
  );
}