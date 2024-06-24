import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Logo from "../assets/images/logo.png"

const LandingPage = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    'Strawford': require('../assets/Fonts/Strawford/Strawford-Black.ttf'),
  });
  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        navigation.navigate('MainPage');
      }, 2000); // 2 seconds

   
      return () => clearTimeout(timer);
    }
  }, [fontsLoaded, navigation]);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
     
      <View style={styles.profileContainer}>
      <View style={styles.rightSideContainer}>

        <Image source={require('../assets/images/sign.png')} style={styles.signImage} />
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontFamily: 'Strawford',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: 'Scilla-Regular',
    fontSize: 16,
    color: '#fff',
  },
  profileContainer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  profileContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
  },
  rightSideContainer: {
    alignItems: 'center',
  },
  signImage: {
    // width: auto,
    // height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  profileName: {
    fontFamily: 'Scilla-RegularItalic',
    fontSize: 14,
  },
});

export default LandingPage;
