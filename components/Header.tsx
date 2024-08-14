import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({onProfileSettingsSelected}) => {

    return (
      <View style={styles.header}>
        <Pressable style={styles.iconButton} >
          <Icon name="" size={24} color="#fff" />
        </Pressable>

        <Text style={styles.headerText}>Platforma edukacyjna 2024</Text>

        <Pressable style={styles.iconButton} onPress={onProfileSettingsSelected}>
          <Icon name="person-outline" size={24} color="#fff" />
        </Pressable>
        </View>
    );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 8,
  },
};

export default Header;
