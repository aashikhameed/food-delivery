//import liraries
import React, { Component, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DashboardToolbar from '../components/DashboardToolbar';
import DashboardTodaySpecial from '../components/DashboardTodaySpecial';
import { useTheme } from 'react-native-paper';

// create a component
const DashboardScreen = ({navigation}) => {

    const theme = useTheme()

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
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
