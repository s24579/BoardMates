// styles/AddEventStyles.js
import { StyleSheet } from "react-native";

const addEventStyles = StyleSheet.create({
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
    error: {
        fontSize: 16,
        color: 'red',
    },
});

export { addEventStyles };