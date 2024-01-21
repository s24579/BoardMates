// styles/MapStyles.js
import { StyleSheet } from "react-native";

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export { mapStyles };