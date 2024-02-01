// utils/CustomInput.js
import React from 'react';
import { Text, TextInput } from 'react-native'
import { CustomInputStyles as styles } from '../styles/CustomInputStyles.js';
import { Controller } from 'react-hook-form';

// const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
//   const {
//     field: { name, onBlur, onChange, value },
//     form: { errors, touched, setFieldTouched },
//     ...inputProps
//   } = props

//   const hasError = errors[name] && touched[name]

//   return (
//     <>
//       <TextInput
//         style={[
//           styles.textInput,
//           props.multiline && { height: props.numberOfLines * 40 },
//           hasError && styles.errorInput
//         ]}
//         value={value}
//         onChangeText={(text) => onChange(name)(text)}
//         onBlur={() => {
//           setFieldTouched(name)
//           onBlur(name)
//         }}
//         {...inputProps}
//       />
//       {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
//     </>
//   )
// }

const CustomInput = ({ control, name, rules = {}, placeholder }) => {
  return (
    <Controller
    control={control}
    name={name}
    rules={rules}
    render={({ field: { value, onChange, onBlur }, fieldState: {error}}) => (
    <>
      <View style={[styles.container, { borderColor: error ? 'red' : 'gray' }]}>
        <TextInput style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        // secureTextEntry={secureTextEntry}
        />
      </View>
      { error && <Text style={styles.error}>{ error.message || 'This space is required.'}</Text> }
    </>
    )}
    />
  )
}

export { CustomInput };