import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import * as SystemUI from 'expo-system-ui';

// Definir la interfaz para el contexto
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Crear el contexto con un valor inicial
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Definir la interfaz para las props del ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const colorScheme = useColorScheme(); // Detecta el tema del sistema
  const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme || 'light');

  useEffect(() => {
    setTheme(colorScheme || 'light');
    SystemUI.setBackgroundColorAsync(theme === 'dark' ? '#000000' : '#FFFFFF');
  }, [colorScheme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    SystemUI.setBackgroundColorAsync(theme === 'light' ? '#000000' : '#FFFFFF');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para acceder al contexto
export const useTheme = () => useContext(ThemeContext);