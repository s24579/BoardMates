import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from '../utils/CustomInput.js';
import { AddEventStyles as styles } from '../styles/AddEventStyles.js';
import { DatePickerField } from '../components/TheDatePicker.jsx';

const [dateFrom, setDateFrom] = useState(new Date())
const [dateTo, setDateTo] = useState(new Date())
const [open, setOpen] = useState(false)
const now = dayjs().day()
const hourFromNow = dayjs().add(1, "hour")

const eventValidationSchema = Yup.object({
    eventTitle: Yup
    .string()
    .min(3, ({ min }) => `Location name must be at least ${min} characters`)
    .max(60, ({ max }) => `Description can't go past ${max} characters`)
    .required('Location name is required'),
    description: Yup
    .string()
    .min(15, ({ min, value }) => `${min - value.length} characters to go`)
    .max(500, ({ max }) => `Description can't go past ${max} characters`)
    .required('Description is required'),
    locationName: Yup
    .string()
    .min(3, ({ min }) => `Location name must be at least ${min} characters`)
    .max(80, ({ max }) => `Description can't go past ${max} characters`)
    .required('Location name is required'),
    dateFrom: Yup
    .date()
    .min(now, "The event must be created at least from the current day."),
    dateTo: Yup
    .date()
    .min(hourFromNow, "The event must end at least one hour from now. For simplicity's sake.")
  });

const AddEvent = () => {
    return (
        <Formik 
        validationSchema={eventValidationSchema} 
        initialValues={{ title: '', description: '', locationName: '', dateFrom: nowOrLater, }} 
        onSubmit={values => console.log(values)}>
        {({ 
            handleSubmit, 
            isValid,
        }) => (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Add an Event
                </Text>
                <Button 
                    title={"ALL DONE"} 
                    onPress={handleSubmit} 
                    disabled={!isValid} 
                />
                <Field style={styles.input} 
                    component={CustomInput} 
                    name="eventTitle" 
                    placeholder='Title' 
                    keyboardType="email-address"
                />
                <Field style={styles.input} 
                    component={CustomInput} 
                    name="description"
                    placeholder='Description' 
                    multiline 
                    numberOfLines={3} 
                    keyboardType="email-address"
                />
                <Field style={styles.input} 
                    component={CustomInput} 
                    name="locationName" 
                    placeholder='Location Name' 
                    keyboardType="email-address"
                />
                <Text style={styles.input}>from</Text>
                <DatePickerField style={styles.input}
                    // component={CustomInput} 
                    name="dateFrom"
                />
                <DatePickerField style={styles.input}
                    // component={CustomInput} 
                    name="dateTo"
                />
                <DatePicker modal
                    open={open}
                    date={dateFrom}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDateFrom(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
                <Text style={styles.input}>to</Text>
                <DatePicker modal
                    open={open}
                    date={dateTo}
                    onConfirm={(date) => {
                    setOpen(false)
                    setDateTo(date)
                    }}
                    onCancel={() => {
                    setOpen(false)
                    }}
                />
            </View>
        )}
        </Formik>
    );
};

export { AddEvent };