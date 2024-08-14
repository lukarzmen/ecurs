import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


const UserProfileSettings = ({ modalVisible, onModalChanged }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onModalChanged(false);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonOption]}
            onPress={() => {
              // Handle profile settings navigation
              onModalChanged(false);
            }}>
            <Text style={styles.textStyle}>Settings</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onModalChanged(false)}>
            <Text style={styles.textStyle}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '30%', // Set a fixed width or percentage as needed
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    elevation: 2,
    alignSelf: 'stretch', // Makes the button match the width of the parent
  },
  buttonOption: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#f44336',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

  
export default UserProfileSettings;