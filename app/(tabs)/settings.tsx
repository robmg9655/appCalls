import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { FontAwesome } from '@expo/vector-icons';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const animation = useRef(new Animated.Value(theme === 'dark' ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: theme === 'dark' ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [theme]);

  const translateX = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 24], // Adjust this value based on the size of your toggle
  });

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.header}>
        <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>AJUSTES</Text>
      </View>
      <TouchableOpacity style={styles.toggleContainer} onPress={toggleTheme}>
        <Animated.View style={[styles.circle, { transform: [{ translateX }] }]} />
        <FontAwesome name="sun-o" size={24} color={theme === 'dark' ? '#fff' : '#000'} style={styles.iconLeft} />
        <FontAwesome name="moon-o" size={24} color={theme === 'dark' ? '#fff' : '#000'} style={styles.iconRight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  lightContainer: { backgroundColor: '#fff' },
  darkContainer: { backgroundColor: '#000' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
  toggleContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#grey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    position: 'absolute',
    top: 20,
    right: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'grey',
    position: 'absolute',
    top: 1,
    left: 5,
  },
  iconLeft: {
    position: 'absolute',
    left: 5,
  },
  iconRight: {
    position: 'absolute',
    right: 5,
  },
});