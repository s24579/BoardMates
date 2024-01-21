// Home.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { HomeStyles as styles } from '../styles/HomeStyles.js';

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

export { Home };