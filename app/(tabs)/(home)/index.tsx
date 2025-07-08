import { Text, ImageBackground, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../../../assets/images/Pixel-Game.png')} // ← use relative path
      resizeMode="stretch" // or 'contain', 'stretch', etc.
    >
      <View>
        <Text>Hello from Home Page!</Text>
      </View>
    </ImageBackground>
  );
}
