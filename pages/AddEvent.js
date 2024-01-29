// AddEvent.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
// import DatePicker from 'react-native-date-picker';
import dayjs from 'dayjs';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CustomInput } from '../utils/CustomInput.js';
import { AddEventStyles as styles } from '../styles/AddEventStyles.js';
// import { DatePickerField } from '../components/TheDatePicker.jsx';
import { eventsData } from '../services/EventDataMockup.js';
// import {apiKey} from './config';

let nextId = 0
let lastId = eventsData[eventsData.length - 1].id                               // in order to get the last part of the array

const now = dayjs().day()                                                       // placeholder variables
const hourFromNow = dayjs().add(1, "hour")
// const [region, setRegion] = useState()

const eventValidationSchema = Yup.object({                                      // validation schema for Formik
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
    .min(hourFromNow, "The event must end at least one hour from now. For simplicity's sake."),
    gameTitle: Yup
    .string()
    .min(3, ({ min }) => `Game name must be at least ${min} characters`) // replace with Game isn't in the BGG catalogue later on
    .max(60, ({ max }) => `Game name can't go past ${max} characters`)   // replace with nothing, I guess
    .required('Game name is required'),
  });

const AddEvent = () => {
    const constructorHasRun = useRef(false);
    // const [dateFrom, setDateFrom] = useState(new Date())
    // const [dateTo, setDateTo] = useState(new Date())
    // const [open, setOpen] = useState(false)
    const [newEvent, setNewEvent] = useState([]);
    const [events, setEvents] = useState(eventsData)

(() => {                                                                        // funny constructor made from Hooks
        if (constructorHasRun.current !== false) 
            return; // if this fucks me up istg
        constructorHasRun.current = true;
        // super(props);
        setNewEvent(newEvent);
        setEvents(events);

        console.log('constructor invoked at ', window.performance.now());
    })();

    const handleEventData = () => {
        if (lastId != 0) {
            nextId == lastId;
        }
        let submittedEvent = {                                                  // data for transfer to the EventsData array
            id: nextId++, 
            title: Yup.eventTitle, 
            game: Yup.gameTitle, 
            description: Yup.description,
            img: placeHolder,
            location: Yup.locationName, 
            latitude: 160.00000,
            longitude: 16.0000,
            dateFrom: Yup.dateFrom, 
            dateTo: Yup.dateTo,
        }
        setNewEvent(submittedEvent);
        setEvents([...eventsData, newEvent]);                                   // gets placed on the bottom of the array
    }

    return (
        <><Button
            title="<"
            onPress={() => { navigation.navigate('Home'); } } />
            <Formik
                validationSchema={eventValidationSchema}
                initialValues={{ title: '', description: '', locationName: '', dateFrom: nowOrLater, dateTo: hourFromNow, gameTitle: '' }}
                onSubmit={handleEventData}>
                {({
                    handleSubmit, isValid,
                }) => (
                    <View style={styles.container}>
                        <Text style={styles.header}>
                            Add an Event
                        </Text>
                        <Button                                                 // Submit button
                            title={"ALL DONE"}
                            onPress={handleSubmit}
                            disabled={!isValid} />
                        <Field style={styles.input}
                            component={CustomInput}
                            name="eventTitle"
                            placeholder='Title'
                            keyboardType="email-address" />
                        <Field style={styles.input}
                            component={CustomInput}
                            name="description"
                            placeholder='Description'
                            multiline
                            numberOfLines={3}
                            keyboardType="email-address" />
                        <Field style={styles.input}
                            component={CustomInput}
                            name="locationName"
                            placeholder='Location Name'
                            keyboardType="email-address" />
                        {/* <SafeAreaView>
                            <GooglePlacesAutocomplete
                            placeholder="Type a place"
                            query={{key: apiKey}}
                            />
                        </SafeAreaView> */}
                        <Text style={styles.input}>from</Text>
                        <DatePickerField style={styles.input}                   // Date fields (not sure if they work)
                            // component={CustomInput} 
                            name="dateFrom" />
                        <DatePickerField style={styles.input}
                            // component={CustomInput} 
                            name="dateTo" />
                        <DatePicker modal                                       // Date pickers
                            open={open}
                            date={dateFrom}
                            onConfirm={(date) => {
                                setOpen(false);
                                setDateFrom(date);
                            } }
                            onCancel={() => {
                                setOpen(false);
                            } } />
                        <Text style={styles.input}>to</Text>
                        <DatePicker modal
                            open={open}
                            date={dateTo}
                            onConfirm={(date) => {
                                setOpen(false);
                                setDateTo(date);
                            } }
                            onCancel={() => {
                                setOpen(false);
                            } } />
                        <Field style={styles.input}                             // add adding images to Events after this
                            component={CustomInput}
                            name="gameTitle"
                            placeholder='Game Provided'
                            keyboardType="email-address" />  
                    </View>
                )}
            </Formik>
        </>
    );
};

export { AddEvent };