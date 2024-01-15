// Home.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Top 40% of the screen */}
            <View style={styles.topContainer}>
                <Text style={styles.titleText}>Board Mates</Text>
            </View>

            {/* Middle buttons */}
            <View style={styles.middleContainer}>
                <TouchableOpacity style={[styles.buttonContainer, styles.squaredButton]} onPress={() => navigation.navigate('Events')}>
                    <Text style={styles.buttonText}>Look for Events</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonContainer, styles.squaredButton]} onPress={() => navigation.navigate('Map')}>
                    <Text style={styles.buttonText}>Look for Places</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom buttons */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={[styles.buttonContainer, styles.squaredButton]} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonContainer, styles.squaredButton]} onPress={() => navigation.navigate('AddEvent')}>
                    <Text style={styles.buttonText}>Add Event</Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#3498db',
    },
    squaredButton: {
        aspectRatio: 1,
    },
});

export default Home;
