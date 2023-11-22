import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { MD3LightTheme, PaperProvider, Text } from 'react-native-paper';

const BOLD = ['display', 'headline'];
const REGULAR = ['title'];

const AppPaperProvider = ({children}) => {

    const myTheme = useMemo(() => {
        const lightTheme = MD3LightTheme;
        const customFonts = Object.fromEntries(
            Object.entries(lightTheme.fonts).map(
                ([variantName, variantprops]) => [
                    variantName,
                    {
                        ...variantprops,
                        fontFamily: BOLD.find(f => variantName.toLowerCase().includes(f)) ? 'Kalam-Bold' :
                        REGULAR.find(f => variantName.toLowerCase().includes(f)) ? 'Kalam-Bold' : 'Kalam-Light'
                    }
                ]
            )
        )

        const appTheme = {
            ...lightTheme,
            fonts: customFonts
        }

        return appTheme
    }, [])

    return <PaperProvider theme={myTheme}>
        {children}
    </PaperProvider>;
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


export default AppPaperProvider;
