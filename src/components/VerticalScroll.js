import React, { useContext } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import FontContext from "../FontContext";
import youtube from "../assets/images/youtube.png";

const VerticalScroll = ({ data }) => {
  const { font } = useContext(FontContext);

  return (
    <ScrollView style={styles.verticalScroll}>
      {data.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.cardImage} />
          </View>
          <View style={styles.textContainer}>
            <Image source={youtube} style={styles.infoIcon} />
            <View style={styles.infoContainer}>
              <View style={styles.cardCategory}>
                <View style={styles.cardPoint}></View>
                <Text style={[styles.cardPointText, { fontFamily: font }]}>{item.category}</Text>
              </View>
              <Text style={[styles.cardTitle, { fontFamily: font }]}>{item.title}</Text>
              <Text style={[styles.cardDescription, { fontFamily: font }]}>{item.description}</Text>
            </View>
            <Text style={[styles.cardDate, { fontFamily: font }]}>{item?.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  verticalScroll: { marginVertical: 10 },
  imageContainer: { width: "40%", zIndex: -1 },
  textContainer: {
    width: "60%",
    backgroundColor: "white",
    zIndex: 999,
    marginLeft: "-10%",
    justifyContent: "space-around"
  },
  card: {
    width: "110%",
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
  },
  cardImage: { width: "100%", height: 320, borderRadius: 20 },
  cardTitle: { fontSize: 18, marginTop: 5, fontWeight: "700" },
  cardSubtitle: { fontSize: 12, color: "#888" },
  cardDescription: { fontSize: 16, color: "#889" },
  cardCategory: { display: "flex", flexDirection: "row", alignItems: "center" },
  cardPoint: {
    backgroundColor: "#000000",
    borderRadius: "50%",
    width: 13,
    height: 13,
    margin: 2,
    padding: 5,
  },
  cardPointText: {
    color: "#000000",
    fontSize: 14,
    marginLeft: 5,
    fontWeight: 500,
    lineHeight: 31.5,
    textAlign: "left",
  },
  cardDate: {
    fontSize: 16,
    color: "#929292",
    marginLeft: 20,
  },
  infoIcon: {
    width: 33,
    height: 33,
    margin: 20,
  },
  infoContainer: {
    marginHorizontal: 20,
  }
});

export default VerticalScroll;
