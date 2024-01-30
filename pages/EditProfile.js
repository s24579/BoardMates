import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditProfile = ({ navigation, route }) => {
    const { defaultNickname, defaultDescription } = route.params;
    const [nickname, setNickname] = useState(defaultNickname || '');
    const [description, setDescription] = useState(defaultDescription || '');

    const handleSave = () => {
        // Logic to save changes to the user profile
        console.log('Nickname:', nickname);
        console.log('Description:', description);
        // Pass the updated nickname and description back to the Profile screen
        navigation.navigate('Profile', { nickname, description });
    };

    const handleDescriptionChange = (text) => {
        // Limit description to 150 characters
        if (text.length <= 150) {
            setDescription(text);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Change Nickname</Text>
            <TextInput
                style={styles.input}
                value={nickname}
                onChangeText={setNickname}
                placeholder="Enter new nickname"
            />
            <Text style={styles.label}>Change Description</Text>
            <TextInput
                style={[styles.input, { height: 100 }]}
                value={description}
                onChangeText={handleDescriptionChange}
                placeholder="Enter new description"
                multiline
                maxLength={150} // Set maximum character limit
            />
            <Button title="Save" onPress={handleSave} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
});

export default EditProfile;
