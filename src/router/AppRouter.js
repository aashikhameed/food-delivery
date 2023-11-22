//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { appRoutes } from './routes';

const Stack = createNativeStackNavigator();

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ header: () => null }}>
                {appRoutes.map((item) => <Stack.Screen key={item.name} name={item.name} component={item.component} />)}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


//make this component available to the app
export default AppRouter;
