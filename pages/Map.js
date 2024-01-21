// Map.js
import React from 'react';
import { View, Image } from 'react-native';
import { MapStyles as styles } from '../styles/MapStyles.js';

const Map = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/map.png')} style={styles.mapImage} />
        </View>
    );
};

export { Map };