//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import DashboardMenuItem from './DashbaordMenuItem';

const MENUS = [
    {
        title: 'Veg Pizza',
    },
    {
        title: 'Non-Veg Pizza',
    },
    {
        title: 'Gourment Pizza',
    },
    {
        title: 'Pizza Mania',
    },
    {
        title: 'Value Combos',
    },
    {
        title: 'Garlic Breads & More',
    }
];

const MenuItems = MENUS.map((item, index) => ({...item, image: `https://source.unsplash.com/random/300x200?&sig=${index}`}))

// create a component
const DashboardMenus = () => {
    return (
        <View style={styles.container}>
            <Text variant='titleMedium'>Menus</Text>
            <FlatList data={MenuItems} numColumns={3} renderItem={({item}) => <DashboardMenuItem item={item} />} />
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
