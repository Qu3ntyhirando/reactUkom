import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('Calculator')}
      >
        <Icon name="calculate" size={50} color="#fff" />
        <Text style={styles.menuText}>Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('Dhikr')}
      >
        <Icon name="favorite" size={50} color="#fff" />
        <Text style={styles.menuText}>Dhikr</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('Contacts')}
      >
        <Icon name="contacts" size={50} color="#fff" />
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.menuItem} 
        onPress={() => navigation.navigate('Gallery')}
      >
        <Icon name="photo" size={50} color="#fff" />
        <Text style={styles.menuText}>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  menuItem: {
    backgroundColor: '#007bff',
    width: '40%',
    height: 150,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
