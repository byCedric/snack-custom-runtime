import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Snack from 'snack-runtime';

export default function App() {
  return (
    <View style={styles.container}>
      <Snack snackUrl='exp://exp.host/@bycedric/great-bagel+REEOUkskIw' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
