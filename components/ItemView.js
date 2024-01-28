// ItemView.js
import React from "react";
import { EventStyles as styles } from "../styles/EventStyles";

const renderEventItem = () => (         // renders the whole event card
    <View style={styles.eventItem}>
        {eventItemData}
        {eventItemButtons}
    </View>
);

const eventItemData = ({ item }) => {
    {/* Left container for event details */}
    return (
        <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>{`Game: ${item.game}`}</Text>
            <Text style={styles.detailText}>{`Place: ${item.location}`}</Text>
            <Text style={styles.detailText}>{`Date and Time: ${item.dateFrom}`}</Text>
            <Text style={styles.detailText}>{`Players: ${item.players}`}</Text>
        </View>
    );
};

const eventItemButtons = ({ item }) => {
    {/* Right container for View and Join buttons */}
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => console.log(`View ${item.game} event`)}>
                <Text style={styles.buttonText}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => console.log(`Join ${item.game} event`)}>
                <Text style={styles.buttonText}>Join</Text>
            </TouchableOpacity>
        </View>
    );
};

export { renderEventItem };