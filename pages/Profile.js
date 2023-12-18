// Profile.js
import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Text style={styles.titleText}>*NickName*</Text>
                <Button title="Edit Profile" onPress={() => console.log('Edit Profile button pressed')} />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    section: {
        marginTop: 20,
        width: '80%',
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    placeholder: {
        width: '100%',
        height: 50,
        backgroundColor: '#ccc',
        marginBottom: 10,
    },
});

export default Profile;
