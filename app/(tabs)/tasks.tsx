import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

export default function TasksScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>📋 Lista de Tareas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  lightContainer: { backgroundColor: '#fff' },
  darkContainer: { backgroundColor: '#000' },
  title: { fontSize: 24, fontWeight: 'bold' },
  lightText: { color: '#000' },
  darkText: { color: '#fff' },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
