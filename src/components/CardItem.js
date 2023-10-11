//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, Card, Divider, Text } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// create a component
const CardItem = ({ item, index }) => {
    const {name, image, description, size, price} = item;
    return (
        <View style={styles.container}>
            <Card style={{ borderRadius: 8, overflow: "hidden" }} mode='elevated'>
                <ImageBackground source={{ uri: image }}>
                    <View style={{ height: responsiveHeight(26) }}>
                        <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                            <View style={{ backgroundColor: "rgba(0,0,0,.7)", paddingHorizontal: responsiveWidth(2) }}>
                                <Text style={styles.textWhite} variant='titleLarge'>{name}</Text>
                                <Text style={styles.textWhite} variant='bodyMedium'>{description}</Text>
                                <Divider style={{ backgroundColor: 'white' }} />
                                <View style={{ flexDirection: 'row', padding: responsiveWidth(1) }}>
                                    <View style={{ flex: 1 }}>
                                        <Text variant='titleLarge' style={styles.textWhite}>₹ {price}</Text>
                                        <Text variant='bodyMedium' style={[styles.textWhite, { textDecorationLine: 'underline' }]}>{size} size pizza</Text>
                                    </View>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Button mode='elevated'>Add</Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </Card>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical: responsiveHeight(1)
    },
    textWhite: { color: 'white' }
});

//make this component available to the app
export default CardItem;
