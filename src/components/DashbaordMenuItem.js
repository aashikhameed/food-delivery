//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// create a component
const DashboardMenuItem = ({item}) => {
    return (
        <View style={styles.container}>
            <Avatar.Image source={{uri: item.image}} />
            <Text style={{textAlign:"center", marginTop: responsiveHeight(1)}} variant='bodyMedium'>{item.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: responsiveWidth(30),
        // justifyContent: 'center',
        alignItems:'center',
        paddingVertical: responsiveHeight(1)
    },
});

//make this component available to the app
export default DashboardMenuItem;
