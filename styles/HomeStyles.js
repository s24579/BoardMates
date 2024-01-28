// styles/HomeStyles.js
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flex: 2, // 40% of the screen
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.brightblue,
    },
    middleContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
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
    logo: {
        resizeMode: 'contain',
    }
});

export { homeStyles };