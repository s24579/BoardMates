// styles/EventStyles.js
import { StyleSheet } from "react-native";

const eventStyles = StyleSheet.create({
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

export { eventStyles };