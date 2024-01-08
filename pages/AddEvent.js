import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const AddEvent = () => {
    const [eventData, setEventData] = useState('');
    const updateQuestion = () => {
        console.log("Thanks!");
    };
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                "Add an Event"
            </Text>
            <Button title={"ALL DONE"} onPress={() => console.log('Event created')}></Button>
            <TextInput style={styles.input} placeholder='Name'></TextInput>
            <TextInput style={styles.input} placeholder='Description'></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    header: {
        fontSize: 22,
        padding: 5,
    },
    input: {
        paddingTop: 2,
        backgroundColor: 'lightgray'
    },
    item: {
        fontSize: 18,
        padding: 10,
    },
});

export default AddEvent;