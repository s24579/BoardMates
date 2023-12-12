import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            {/* Top 40% of the screen */}
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Board Mates</Text>
            </View>

            {/* Middle button */}
            <View style={styles.middleContainer}>
                <Button title="Look for Events" onPress={() => console.log('Look for events button pressed')} />
            </View>

            {/* Bottom buttons */}
            <View style={styles.bottomContainer}>
                <View style={styles.buttonContainer}>
                    <Button title="Profile" onPress={() => console.log('Profile button pressed')} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Add Event" onPress={() => console.log('Add Event button pressed')} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flex: 2, // 40% of the screen
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
    },
    middleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
});

export default HomeScreen;
