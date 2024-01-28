// styles/LoginStyles.js
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.brightblue,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 30,
    },
    titleText: {
        fontSize: 24,
        color: '#fff',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.brightblue,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: COLORS.brightblue,
    },
    squaredButton: {
        aspectRatio: 1,
    },
    smallButton: {
        width: 50,
    },
});

export { loginStyles };