import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    date: string;
  };
}

export default function TaskCard({ task }: TaskProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, theme === 'dark' ? styles.darkCard : styles.lightCard]}>
      <Text style={[styles.title, theme === 'dark' ? styles.darkText : styles.lightText]}>{task.title}</Text>
      <Text style={[styles.description, theme === 'dark' ? styles.darkText : styles.lightText]}>{task.description}</Text>
      <Text style={[styles.date, theme === 'dark' ? styles.darkText : styles.lightText]}>{task.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
    boxShadow: '1px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  lightCard: {
    backgroundColor: '#fff',
    borderColor: '#000',
  },
  darkCard: {
    backgroundColor: '#000',
    borderColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
  },
  lightText: {
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },
});