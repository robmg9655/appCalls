import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <ThemeProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5, height: 60 },
          headerShown: false,
        }}
      >
        <Tabs.Screen 
          name="index" 
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          }} 
        />
        <Tabs.Screen 
          name="tasks" 
          options={{
            title: 'Tareas',
            tabBarIcon: ({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />,
          }} 
        />
        <Tabs.Screen 
          name="settings" 
          options={{
            title: 'Ajustes',
            tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" size={size} color={color} />,
          }} 
        />
      </Tabs>
    </ThemeProvider>
  );
}
