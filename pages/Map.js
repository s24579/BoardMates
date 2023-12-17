// Map.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Map = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/map.png')} style={styles.mapImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default Map;
