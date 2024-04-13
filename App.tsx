import { StatusBar, View } from 'react-native';

import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <View>
      <StatusBar barStyle="dark-content" />
    </View>
  );
}


