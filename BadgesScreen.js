import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function BadgesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Badges</Text>
      <Text style ={styles.subtitle}>The badges screen will record your progress as a plant parent!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8f5e9', // Light green background
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#388e3c', // Dark green text
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '388e3c',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
