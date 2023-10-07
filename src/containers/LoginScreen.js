//import liraries
import React, { Component, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import auth from '@react-native-firebase/auth';
import { screenNames } from '../router/routes';

// create a component
const LoginScreen = ({navigation}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otpValue, setOtpValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [verification, setVerification] = useState(null);

    const generateOtp = useCallback(async () => {
        try {
            setLoading(true);
            const data = await auth().signInWithPhoneNumber(`+91 ${phoneNumber}`, true);
            setVerification(data);
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }, [phoneNumber]);

    const verifyOtp = useCallback(async () => {
        try {
            setLoading(true)
            const response = await verification.confirm(otpValue);
            navigation.replace(screenNames.dashboardScreen)
            console.log(response)
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    }, [verification, otpValue, navigation])

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', marginBottom: responsiveHeight(10) }} variant='headlineLarge'>Food Delivery</Text>
            <Text>Enter your phone number</Text>
            <TextInput label="Phone Number"
                maxLength={10}
                onChangeText={setPhoneNumber} value={phoneNumber}
                keyboardType='phone-pad' />
            {
                verification ? <TextInput maxLength={6} keyboardType='number-pad' style={{ marginTop: responsiveHeight(2) }} onChangeText={setOtpValue} label="OTP" /> : null
            }
            <Button loading={loading} style={{ marginTop: responsiveHeight(3) }} mode='contained' onPress={verification ? verifyOtp : generateOtp}>{verification ? 'Verify OTP' : 'Get OTP'}</Button>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(4)
        // alignItems: 'center',
    },
});

//make this component available to the app
export default LoginScreen;
