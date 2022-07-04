import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from './Header.style';

const Header = () => {

    const burgerIcon = require('../../assets/burger.png');
    const editIcon = require('../../assets/edit.png');
    const brandIcon = require('../../assets/brand.png');
    // bu path'leri diğer branchte parametre olarak yollamaya çalıştım ama olmadı.

    return (
        <View style={styles.header}>
            <Image style={styles.iconLeft} source={burgerIcon} />
            <Image style={styles.iconCenter} source={brandIcon} />
            <Image style={styles.iconRight} source={editIcon} />
        </View>
    );
}

export default Header;