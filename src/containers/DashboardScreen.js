//import liraries
import React, { Component, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { screenNames } from '../router/routes';

// create a component
const DashboardScreen = ({navigation}) => {

    const logoutPressed = useCallback(() => {
        
    }, [])

    return (
        <View style={styles.container}>
            <Text>DashboardScreen</Text>
            <Button onPress={logoutPressed}>Logout</Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default DashboardScreen;
