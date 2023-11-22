import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppRouter from './src/router/AppRouter';
import AppPaperProvider from './src/components/AppPaperProvider';

const App = () => {
  return (
    <View style={styles.container}>
      <AppPaperProvider>
        <AppRouter />
      </AppPaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
