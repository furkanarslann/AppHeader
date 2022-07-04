import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from './Header.style';

const Header = ({ iconLeft, iconCenter, iconRight }) => {

    return (
        <View style={styles.header}>
            <Image style={styles.iconLeft} source={iconLeft} />
            <Image style={styles.iconCenter} source={iconCenter} />
            <Image style={styles.iconRight} source={iconRight} />
        </View>
    );
}

export default Header;