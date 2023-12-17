// Events.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';


const eventsData = [
    { id: '1', game: 'Monopoly', place: 'The Board Game Bar', dateTime: '15.01.2023 15:00', players: '5/10' },
    { id: '2', game: 'Catan', place: 'Dicey Tavern', dateTime: '16.01.2023 18:30', players: '8/10' },
    { id: '3', game: 'Ticket to Ride', place: 'Pub of Routes', dateTime: '20.01.2023 20:00', players: '3/10' },
    { id: '4', game: 'Scrabble', place: 'Word Haven', dateTime: '22.01.2023 14:30', players: '6/10' },
    { id: '5', game: 'Risk', place: 'Strategic Spirits', dateTime: '25.01.2023 19:45', players: '4/10' },
    { id: '6', game: 'Clue', place: 'Mystery Pub', dateTime: '28.01.2023 17:15', players: '7/10' },
    { id: '7', game: 'Pictionary', place: 'Artistic Ales', dateTime: '02.02.2023 16:45', players: '2/10' },
    { id: '8', game: 'Battleship', place: 'Naval Nectar', dateTime: '05.02.2023 21:00', players: '9/10' },
    { id: '9', game: 'Uno', place: 'Colorful Cards Club', dateTime: '09.02.2023 19:30', players: '5/10' },
    { id: '10', game: 'Ludo', place: 'Lucky Ludus Lounge', dateTime: '12.02.2023 14:00', players: '3/10' },
    { id: '11', game: 'Connect Four', place: 'FourSquare Pub', dateTime: '15.02.2023 18:00', players: '6/10' },
    { id: '12', game: 'Dominoes', place: 'Domino Domain', dateTime: '18.02.2023 16:15', players: '8/10' },
    { id: '13', game: 'Checkers', place: 'Checkerboard Cheers', dateTime: '22.02.2023 20:30', players: '4/10' },
    { id: '14', game: 'Yahtzee', place: 'Lucky Dice Lounge', dateTime: '25.02.2023 17:45', players: '7/10' },
    { id: '15', game: 'Bingo', place: 'Bingo Bliss Bar', dateTime: '28.02.2023 19:00', players: '1/10' },
];

const Events = () => {
    const renderEventItem = ({ item }) => (
        <View style={styles.eventItem}>
            {/* Left container for event details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.detailText}>{`Game: ${item.game}`}</Text>
                <Text style={styles.detailText}>{`Place: ${item.place}`}</Text>
                <Text style={styles.detailText}>{`Date and Time: ${item.dateTime}`}</Text>
                <Text style={styles.detailText}>{`Players: ${item.players}`}</Text>
            </View>

            {/* Right container for View and Join buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => console.log(`View ${item.game} event`)}>
                    <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => console.log(`Join ${item.game} event`)}>
                    <Text style={styles.buttonText}>Join</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={eventsData}
                keyExtractor={(item) => item.id}
                renderItem={renderEventItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    eventItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#3498db',
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 8,
    },
    detailsContainer: {
        flex: 1,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 8,
    },
    buttonContainer: {
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3498db',
        marginBottom: 16,
    },
    buttonText: {
        fontSize: 18,
    },
});

export default Events;