import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useContext } from 'react';
import FontContext from '../FontContext';
import data from '../assets/data/data';
import Insta from "../assets/images/insta.png";

const SocialConnect = () => {
  const { font } = useContext(FontContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.header, { fontFamily: font }]}>Social Connect</Text>
      <Text style={[styles.subHeader, { fontFamily: font }]}>Stay updated with my latest posts on your favorite platforms</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {data.slice(0, 5).map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={Insta} style={styles.infoIcon} />
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.cardTitle, { fontFamily: font }]}>{item.subtitle}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -10,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    width: 150,
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardTitle: {
    padding: 10,
    fontSize: 14,
    color: '#000',
  },
  infoIcon: {
    position: "absolute",
    zIndex: 1,
    width: 30,
    height: 30,
    left: 10,
    top: 10,
    borderRadius: 10,
  }
});

export default SocialConnect;
