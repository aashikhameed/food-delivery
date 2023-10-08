//import liraries
import React, { Component, useCallback, useState } from 'react';
import { View,  StyleSheet, Alert } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';
import { screenNames } from '../router/routes';

// create a component
const UserInformationScreen = ({navigation}) => {

    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);

    const updateInformation = useCallback(async () => {
        if (userName.trim().length === 0) {
            Alert.alert('Invalid UserName', 'Please enter your user name');
            return;
        }
        setLoading(true);
        await auth().currentUser.updateProfile({
            displayName: userName
        });
        setLoading(false)
        navigation.replace(screenNames.dashboardScreen);
    }, [userName])

    return (
        <View style={styles.container}>
            <Text style={{textAlign: 'center'}} variant='headlineLarge'>Update Profile Information</Text>

            <TextInput style={{marginVertical: responsiveHeight(2)}} label="User Name" onChangeText={setUserName} keyboardType='default' />

            <Button loading={loading} mode='contained' onPress={updateInformation}>Update</Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(4)
    },
});

//make this component available to the app
export default UserInformationScreen;
