import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Profile = ({ navigation, route }) => {
    const defaultNickname = 'Default Nickname';
    const defaultDescription = 'Default Description';

    const handleEditProfile = () => {
        navigation.navigate('EditProfile', {
            defaultNickname,
            defaultDescription,
        });
    };

    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Text style={styles.titleText}>{defaultNickname}</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Edit Profile" style={styles.button} onPress={handleEditProfile} />
                    <View style={{ marginBottom: 5 }} />
                </View>
            </View>

            {/* Avatar */}
            <Image source={require('../assets/avatar.png')} style={styles.avatar} />

            {/* User Description */}
            <Text style={styles.descriptionText}>{defaultDescription}</Text>

            {/* Favorite GamesList Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Favorite Games</Text>
                {/* Placeholder content */}
                <View style={styles.placeholder}></View>
            </View>
        </View>
    );
};

export { Profile };