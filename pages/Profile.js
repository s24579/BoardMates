// Profile.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { ProfileStyles as styles } from '../styles/ProfileStyles.js';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Text style={styles.titleText}>*NickName*</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Edit Profile" style={styles.button} onPress={() => console.log('Edit Profile button pressed')} />
                    <View style={{ marginBottom: 5 }} />
                    <Button title="Settings" style={styles.button} onPress={() => console.log('Settings button pressed')} />
                </View>
            </View>

            {/* Avatar */}
            <Image source={require('../assets/avatar.png')} style={styles.avatar} />

            {/* User Description */}
            <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur odio id purus ultrices, non
                accumsan elit tristique. Vestibulum eget mauris ac nisi fermentum fermentum.
            </Text>

            {/* Favorite Games Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Favorite Games</Text>
                {/* Placeholder content */}
                <View style={styles.placeholder}></View>
                <View style={styles.placeholder}></View>
                <View style={styles.placeholder}></View>
            </View>

            {/* Favorite Places Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Favorite Places</Text>
                {/* Placeholder content */}
                <View style={styles.placeholder}></View>
                <View style={styles.placeholder}></View>
                <View style={styles.placeholder}></View>
            </View>
        </View>
    );
};

export { Profile };