import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      {/* Main Content Area */}
      <View style={styles.mainContainer}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Sidebar</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.contentText}>Main Content Area</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
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