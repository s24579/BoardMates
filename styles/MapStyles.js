// styles/MapStyles.js
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors.js"

const mapStyles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightblue,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    searchSection: {
        height: '30%',
        backgroundColor: COLORS.lightblue,
    },
    searchBar: {
        backgroundColor: COLORS.lightblue,
    },
    sliderThumb: {
        height: 20,
        width: 20,
        backgroundColor: 'black',
    },
    button: {
        width: '49%',
        borderRadius: 5,
        marginHorizontal: 2,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 2,
    },
    callout: {
        height: 150,
        width: 150,
        backgroundColor: COLORS.lightblue,
    },
    insideCallout: {
        flex: 1,
        justifyContent: 'space-between'
    },
});

export { mapStyles };