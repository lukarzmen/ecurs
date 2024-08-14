import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './Header';
import CourseService from '@/services/CourseService';
import Sidebar from './Sidebar';
import UserProfileSettings from './UserProfileSettings';
const App = () => {
  const [content, setContent] = useState("")
  const courseService = new CourseService();
  const [modalVisible, setModalVisible] = useState(false);
  const handleProfileSettingsSelected = () => {
      setModalVisible(!modalVisible);
  }
  return (
    
    <View style={styles.container}>
      {/* Header */}
      <Header onProfileSettingsSelected={handleProfileSettingsSelected}></Header>
     
      {/* Main Content Area */}
      <View style={styles.mainContainer}>
      
        {/* Sidebar */}
        <Sidebar courseId="1" onLessonChanged={(lessonId: number) => {
          const lessonContent = courseService.fetchCourseContent(lessonId)
          console.log("dupa")
          if (lessonContent) {
            setContent(lessonContent);
          }
        }}></Sidebar>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.contentText}>{content}</Text>
          <UserProfileSettings onModalChanged={(val: boolean) => setModalVisible(val)} modalVisible={modalVisible}></UserProfileSettings>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Platforma edukacyjna 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 100,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  sidebarText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  contentText: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default App;