import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppRouter from './src/router/AppRouter';

const App = () => {
  return (
    <View style={styles.container}>
      <AppRouter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
