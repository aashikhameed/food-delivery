//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CardItem from './CardItem';
import DashboardMenus from './DashboardMenus';

// create a component
const DashboardTodaySpecial = () => {
    return (
        <View style={styles.container}>
            
            <FlatList ListHeaderComponent={() => <>
                <DashboardMenus />
                <Divider />
                <Text style={{marginTop: responsiveHeight(1)}} variant='titleMedium'>Today's Special</Text>
            </>} data={Array(5)} renderItem={({ item, index }) => <CardItem item={item} index={index} />} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1)
    },
});

//make this component available to the app
export default DashboardTodaySpecial;
