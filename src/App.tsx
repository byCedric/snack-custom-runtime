import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationProvider } from './providers/Navigation';
import { ThemeProvider } from './providers/Theme';
import { SnackProvider } from './providers/Snack';

export function App() {
  return (
    <SnackProvider>
      <ThemeProvider>
        <NavigationProvider>
          <StatusBar style="dark" />
        </NavigationProvider>
      </ThemeProvider>
    </SnackProvider>
  );
}
