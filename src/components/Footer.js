import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Tv from "../assets/icons/Tv";
import BookOpen from '../assets/icons/BookOpen';
import Bell from '../assets/icons/Bell';
import User from '../assets/icons/User';
import Bookmark from '../assets/icons/Bookmark';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState("book");

  const handleIconPress = (icon) => {
    setActiveIcon(icon === activeIcon ? null : icon);
  };

  const renderIcon = (icon, Component) => {
    const isActive = activeIcon === icon;
    return (
      <TouchableOpacity onPress={() => handleIconPress(icon)}>
        <View style={styles.iconContainer}>
          {isActive && <View style={styles.activeCircle} />}
          <Component width={25} height={25} stroke={isActive ? "#fff" : "#000"} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.footer}>
      <View style={styles.footerContainer}>
        {renderIcon('book', BookOpen)}
        {renderIcon('tv', Tv)}
        {renderIcon('bell', Bell)}
        {renderIcon('user', User)}
        {renderIcon('bookmark', Bookmark)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#000',
    height: '10%',
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: '90%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  iconContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
