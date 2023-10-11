//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import DashboardMenuItem from './DashbaordMenuItem';
import firestore from '@react-native-firebase/firestore';
import { FIRESTORE } from '../utils/firestoreConstants';

// create a component
const DashboardMenus = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        firestore().collection(FIRESTORE.collections.dashboardMenus).get().then(snapshot => {
            const data = [];
            snapshot.forEach(item => data.push(item.data()));
            setMenuItems(data);
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text variant='titleMedium'>Menus</Text>
            <FlatList data={menuItems} numColumns={3} renderItem={({item}) => <DashboardMenuItem item={item} />} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        paddingVertical: responsiveHeight(1),
        // paddingHorizontal: responsiveWidth(4)
    },
});

//make this component available to the app
export default DashboardMenus;
