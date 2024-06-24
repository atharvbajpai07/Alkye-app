import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import FontContext from '../FontContext';

const HorizontalScroll = ({ data, showAll, onToggleViewAll }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const trackWidth = useRef(new Animated.Value(50)).current;
  const scrollViewRef = useRef(null);
  const { font } = useContext(FontContext);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const cardWidth = 200; 
    const activeCardIndex = Math.round(scrollPosition / cardWidth);
    setActiveIndex(activeCardIndex);
  };

  useEffect(() => {
    Animated.timing(trackWidth, {
      toValue: activeIndex === null ? 50 : 100, 
      duration: 300, 
      useNativeDriver: false,
    }).start();
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.horizontalScroll}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={scrollViewRef}
      >
        {data.map((item, index) => (
          <View key={item.id} style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.cardCategory}>
              <View style={styles.cardPoint}></View>
              <Text style={styles.cardPointText}>{item.category}</Text>
            </View>
            <Text style={[styles.cardTitle, { fontFamily: font }]}>{item.title}</Text>
            <Text style={[styles.cardDescription, { fontFamily: font }]}>{item.description}</Text>
            <Text style={[styles.cardDate, { fontFamily: font }]}>{item?.date}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.trackContainer}>
        {data.map((_, index) => (
          <Animated.View
            key={index}
            style={[
              styles.track,
              activeIndex === index && { width: trackWidth },
            ]}
          />
        ))}
      </View>
      {data.length > 5 && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onToggleViewAll}>
            <Text style={styles.viewButton}>
              {showAll ? "View Less" : "View All"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  horizontalScroll: { marginVertical: 10 },
  card: {
    width: 278,
    height: 440,
    marginRight: 30,
    backgroundColor: "white",
    borderRadius: 20,
  },
  cardImage: {
    width: 278,
    height: 249,
    borderRadius: 20,
    marginBottom: 10,
  },
  cardTitle: { fontSize: 18, marginTop: 5, marginLeft: 10  },
  cardSubtitle: { fontSize: 16, color: "#000000", marginLeft: 10 },
  cardDescription: { fontSize: 14, color: "#888", marginLeft: 10 },
  cardCategory: { display: "flex", flexDirection: "row", alignItems: "center", marginLeft: 10 },
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
    fontWeight: "500",
    lineHeight: 31.5,
    textAlign: "left",
  },
  trackContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: 5,
  },
  track: {
    height: 5,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 5,
    width: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  cardDate: {
    fontSize: 16, color: "#929292", marginLeft: 10 , position: "absolute",
    bottom: 10,
    left: 10,
  },
  viewButton: { fontSize: 14, color: "#007BFF" },
});

export default HorizontalScroll;
