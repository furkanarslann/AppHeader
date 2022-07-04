import React from "react";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        elevation: 5,
    },
    iconLeft: {
        width: 32,
        height: 32,
    },
    iconCenter: {
        width: 64,
        height: 64,
    },
    iconRight: {
        width: 32,
        height: 32,
    },

});

export default styles;