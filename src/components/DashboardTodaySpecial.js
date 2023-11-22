//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Button, Divider, Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CardItem from './CardItem';
import DashboardMenus from './DashboardMenus';
import firestore, { FirebaseFirestoreTypes, firebase } from '@react-native-firebase/firestore';
import { FIRESTORE } from '../utils/firestoreConstants';
import _ from 'lodash';

// create a component
const DashboardTodaySpecial = () => {

    const [todaysSpecial, setTodaysSpecial] = useState([]);

    useEffect(() => {
        const subscribe = firestore().collection(FIRESTORE.collections.todaysSpecial).orderBy('date', 'asc')
            .onSnapshot(snapshot => {
                const data = [];
                snapshot?.forEach(item => data.push(item.data()))
                setTodaysSpecial(data.reverse())
            });
        return () => subscribe();
    }, []);

    const todaysspecial = () => {
        firestore().collection(FIRESTORE.collections.todaysSpecial).add({
            name: 'Margherita',
            description: 'A classic pizza topped with tomato sauce, mozzarella cheese, and fresh basil leaves.',
            price: 160,
            image: 'https://source.unsplash.com/random/300x200?&sig=' + _.uniqueId(),
            size: 'Small',
            date: firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <View style={styles.container}>
            <Button onPress={todaysspecial}>Update todays's Special </Button>
            <FlatList
                contentContainerStyle={styles.flatlistContainer}
                ListHeaderComponent={<>
                    <DashboardMenus />
                    <Divider />
                    <Text style={{ marginTop: responsiveHeight(1) }} variant='titleMedium'>Today's Special</Text>
                </>}
                data={todaysSpecial}
                renderItem={({ item, index }) => <CardItem item={item} index={index} />} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlistContainer: {
        paddingHorizontal: responsiveWidth(4),
    }
});

//make this component available to the app
export default DashboardTodaySpecial;
