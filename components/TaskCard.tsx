import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    date: string;
  };
}

export default function TaskCard({ task }: TaskProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.date}>{task.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
    marginBottom: 10,
    boxShadow: '1px 2px 5px rgba(255, 255, 255, 0.91)',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    color: '#fff',
  },
});
