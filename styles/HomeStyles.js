// styles/HomeStyles.js
import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    topContainer: {
        flex: 2, // 40% of the screen
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3498db',
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
        borderColor: '#3498db',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#3498db',
    },
    squaredButton: {
        aspectRatio: 1,
    },
});

export { homeStyles };