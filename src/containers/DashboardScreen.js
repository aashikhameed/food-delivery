//import liraries
import React, { Component, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DashboardToolbar from '../components/DashboardToolbar';
import DashboardTodaySpecial from '../components/DashboardTodaySpecial';

// create a component
const DashboardScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <DashboardToolbar />
            <DashboardTodaySpecial />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

//make this component available to the app
export default DashboardScreen;
