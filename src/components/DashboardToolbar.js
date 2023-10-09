//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// create a component
const DashboardToolbar = () => {
    return (
        <>
            <View style={styles.container}>
                <Text variant='titleLarge'>Food Delivery</Text>
            </View>
            <Divider />
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveWidth(4), paddingVertical: responsiveHeight(2)
    },
});

//make this component available to the app
export default DashboardToolbar;
