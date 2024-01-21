// styles/CustomInputStyles.js
import { StyleSheet } from "react-native";

const customInputStyles = StyleSheet.create({
    textInput: {
      height: 40,
      width: '100%',
      margin: 10,
      backgroundColor: 'white',
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
    },
    errorText: {
      fontSize: 10,
      color: 'red',
    },
    errorInput: {
      borderColor: 'red',
    }
});

export { customInputStyles };