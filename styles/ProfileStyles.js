// styles/ProfileStyles.js
import { StyleSheet } from "react-native";
import { COLORS } from "./Colors";

const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    titleText: {
        fontSize: 24,
    },
    section: {
        marginTop: 20,
        width: '80%',
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    placeholder: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.lightgray,
        marginBottom: 10,
    },
});

export { profileStyles };