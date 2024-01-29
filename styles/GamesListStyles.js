// styles/GamesListStyles.js
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const gamesListStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    headingLeft: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    glass: {
        height: 20,
        width: 20,
        marginRight: 15,
    },
    headingRight: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        fontSize: 17,
    },
    filterItem: {
        marginLeft: 15,
    },
    gameItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        padding: 16,
        backgroundColor: COLORS.brightblue,
        borderWidth: 1,
        borderColor: COLORS.brightblue,
        borderRadius: 8,
    },
    footer: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
});

export { gamesListStyles };