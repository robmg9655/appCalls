import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';

export default function AddTaskScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>Agregar Nueva Tarea</Text>

      <TextInput
        style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
        placeholder="Título de la tarea"
        placeholderTextColor={theme === 'dark' ? '#ccc' : '#888'}
      />
      <TextInput
        style={[styles.input, theme === 'dark' ? styles.darkInput : styles.lightInput]}
        placeholder="Descripción"
        placeholderTextColor={theme === 'dark' ? '#ccc' : '#888'}
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={() => router.push('/')}>
        <Text style={styles.saveButtonText}>Guardar Tarea</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  lightContainer: { backgroundColor: '#fff' },
  darkContainer: { backgroundColor: '#000' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  darkText: { color: '#fff' },
  lightText: { color: '#000' },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, fontSize: 16, marginBottom: 15 },
  lightInput: { borderColor: '#ccc', color: '#000' },
  darkInput: { borderColor: '#555', color: '#fff' },
  saveButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, alignItems: 'center' },
  saveButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});