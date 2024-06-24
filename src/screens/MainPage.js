import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
} from "react-native";
import { Picker } from '@react-native-picker/picker'; // Import Picker from the correct package
import HorizontalScroll from "../components/HorizontalScroll";
import VerticalScroll from "../components/VerticalScroll";
import Icon from "react-native-vector-icons/FontAwesome";
import data from "../assets/data/data";
import Footer from "../components/Footer";
import SocialConnect from "../components/SocialConnect";
import FontContext from "../FontContext";

const availableFonts = [
  "Strawford",
  "Northwell",
  "NorthwellAlt",
  "Scilla-Regular",
  "Scilla-RegularItalic",
  "ScillaNarrow-Regular",
  "ScillaNarrow-RegularItalic",
  "Strawford-Black",
  "Strawford-Bold",
  "Strawford-ExtraLight",
  "Strawford-Light",
  "Strawford-Medium",
  "Strawford-Regular",
  "Strawford-Thin"
];

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [showAllHorizontal, setShowAllHorizontal] = useState(false);
  const [showAllVertical, setShowAllVertical] = useState(false);
  const [showFontPicker, setShowFontPicker] = useState(false);
  const { font, changeFont } = useContext(FontContext); // Consume the context

  const handleSearch = (text) => {
    setSearch(text);
    const newData = data.filter(
      (item) =>
        item.title.toLowerCase().includes(text.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleViewAllHorizontal = () => {
    setShowAllHorizontal(!showAllHorizontal);
  };

  const handleViewAllVertical = () => {
    setShowAllVertical(!showAllVertical);
  };

  const handleFontPickerToggle = () => {
    setShowFontPicker(!showFontPicker);
  };

  const dataToShowHorizontal = showAllHorizontal
    ? filteredData
    : filteredData.slice(0, 5);
  const dataToShowVertical = showAllVertical
    ? filteredData
    : filteredData.slice(0, 5);

  return (
    <>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/Logo1.png")}
          style={styles.logo}
        />
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchBar, { fontFamily: font }]}
            placeholder="Search ..."
            value={search}
            onChangeText={handleSearch}
          />
          <Icon
            name="search"
            size={20}
            color="#888"
            style={styles.searchIcon}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.horizontalContainer}>
          <HorizontalScroll
            data={dataToShowHorizontal}
            showAll={showAllHorizontal}
            onToggleViewAll={handleViewAllHorizontal}
          />
        </View>

        <TouchableOpacity onPress={handleFontPickerToggle} style={styles.chooseFontButton}>
          <Text style={styles.chooseFontButtonText}>Choose Font</Text>
        </TouchableOpacity>

        {showFontPicker && (
          <>
            <Text style={[styles.CustomFont, { fontFamily: font }]}>Choose your personalised font</Text>
            <Picker
              selectedValue={font}
              style={styles.picker}
              onValueChange={(itemValue) => changeFont(itemValue)}
            >
              {availableFonts.map((fontName) => (
                <Picker.Item key={fontName} label={fontName} value={fontName} />
              ))}
            </Picker>
            <TouchableOpacity onPress={handleFontPickerToggle} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </>
        )}

        <VerticalScroll data={dataToShowVertical} />
        {filteredData.length > 5 && (
          <Pressable onPress={handleViewAllVertical} style={styles.viewButton}>
            <Text style={[styles.buttonText, { fontFamily: font }]}>
              {showAllVertical ? "View Less" : "View All"}
            </Text>
          </Pressable>
        )}
        <SocialConnect />
      </ScrollView>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex", flex: 1, padding: 10 },
  searchBar: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingRight: 40, // Leave space for the icon
    width: 149,
  },
  searchIcon: {
    position: "absolute",
    right: 15,
    top: 18, // Adjust as needed
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    flex: 1,
    justifyContent: "flex-end",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    width: "100%",
    backgroundColor: "#000",
    paddingVertical: 10,
  },
  horizontalContainer: {
    marginVertical: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 10,
  },
  viewButton: {
    width: 195,
    height: 40,
    borderRadius: 20, // Adjust as needed
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: "10%",
  },
  buttonText: {
    color: "black",
    fontFamily: "Strawford",
  },
  picker: {
    height: 150,
    width: 200,
    alignSelf: "center",
    marginVertical: 20,
  },
  CustomFont: {
    fontSize: 20,
    alignSelf: "center",
  },
  chooseFontButton: {
    alignSelf: "center",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  chooseFontButtonText: {
    color: "black",
    fontSize: 16,
  },
  closeButton: {
    alignSelf: "center",
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#FF0000",
    borderRadius: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MainPage;
