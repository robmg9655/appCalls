import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/ThemeContext';
import TaskCard from '@/components/TaskCard';
import tasks from '@/constants/tasksEx';

export default function HomeScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, theme === 'dark' ? styles.darkContainer : styles.lightContainer]}>
      <View style={styles.header}>
        <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>Inicio</Text>
      </View>
      <Text style={[styles.subtitle, theme === 'dark' ? styles.darkText : styles.lightText]}>📅 Tareas de Hoy</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/addTask')}>
        <Text style={styles.addButtonText}>Nueva Tarea</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  lightContainer: { backgroundColor: '#f0f0f0' },
  darkContainer: { backgroundColor: '#000000' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 },
  title: { fontSize: 36, fontWeight: 'bold' },
  darkText: { color: '#fff' },
  lightText: { color: '#000' },
  addButton: { backgroundColor: '#86ff96', padding: 15, borderRadius: 10, alignItems: 'center', alignSelf: 'center', marginBottom: 20, boxShadow: '1px 2px 5px rgba(43, 255, 0, 0.6)'},
  addButtonText: { color: '#000', fontSize: 20, fontWeight: 'bold' },
  subtitle: { fontSize: 22, fontWeight: '600', marginBottom: 10 },
});