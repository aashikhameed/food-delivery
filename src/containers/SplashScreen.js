//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { bgImage } from '../assets';
import { ActivityIndicator } from 'react-native-paper';
import { screenNames } from '../router/routes';
import auth from '@react-native-firebase/auth';

// create a component
const SplashScreen = ({navigation}) => {

    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (!user) {
                navigation.replace(screenNames.loginScreen)
            } else {
                navigation.replace(screenNames.dashboardScreen)
            }
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={bgImage} style={{ position: 'absolute', top: 0, bottom: 0, height: '100%', opacity: 0.4 }} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <ActivityIndicator size={'large'} />
            </View>
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
export default SplashScreen;
