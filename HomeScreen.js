/* global require */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Plant Parenthood</Text>
      <Image source={require('./assets/Forage.jpg')} style={styles.image} />
      <Text style={styles.subtitle}>Please choose an option below to start!</Text>
      <View style={styles.widgetContainer}>
        <TouchableOpacity style={styles.widget} onPress={() => navigation.navigate('Garden')}>
          <Text style={styles.widgetText}>Garden</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget}>
          <Text style={styles.widgetText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget} onPress={() => navigation.navigate('Badges')}>
          <Text style={styles.widgetText}>Badges</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

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

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },

  widgetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },

  widget: {
    backgroundColor: '#388e3c', // Dark green background
    padding: 15,
    borderRadius: 10,
  },

  widgetText: {
    color: '#fff', // White text
    fontSize: 18,
  },
});
