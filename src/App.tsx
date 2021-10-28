import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationProvider } from './providers/Navigation';
import { ThemeProvider } from './providers/Theme';

export function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <StatusBar style="auto" />
      </NavigationProvider>
    </ThemeProvider>
  );
}
