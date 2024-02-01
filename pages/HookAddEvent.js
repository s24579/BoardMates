import React from "react";
import { TextInput, Button, SafeAreaView } from "react-native";
import { dayjs } from "dayjs";
import { useForm, Controller } from "react-hook-form";
import { CustomInput } from "../utils/CustomInput.js";
import { AddEventStyles as styles } from '../styles/AddEventStyles.js';
import { eventsData } from "../services/EventDataMockup.js";
import allGames from './bgg/GamesData.json';

// const Input = ({ name, control }) => {
//     const { field } = useController({
//         control,
//         defaultValue: '',
//         name,
//     })
//     return (
//         <TextInput 
//         style={styles.input}
//         value={field.value}
//         onChangeText={field.onChange}
//         />
//     )
// }
let nextId = 0
let lastId = eventsData[eventsData.length - 1].id

const placeHolder = <Image uri="./assets/map.png" style={{
    width: 600,
    height: 400,
}}/> 
const mockDateFrom = dayjs().add(1, "day")                      // placeholders and mock-ups
const mockDateTo = dayjs().add(2, "day")

const AddEvent = () => {
    const [dateFrom, setDateFrom] = useState(new Date())
    const [dateTo, setDateTo] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [newEvent, setNewEvent] = useState([]);
    const [events, setEvents] = useState(eventsData)
    const {
        control,
        handleSubmit,
        register,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            title: "",
            game: "",
            description: "",
            img: placeHolder,
            location: "",
            dateFrom: mockDateFrom,
            dateTo: mockDateTo,
        },
    })

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

    setNewEvent(newEvent);
    setEvents(events);
    
    return (
        <View style={styles.container}>
            <CustomInput
            name="title"
            placeholder="Event title"
            control={control}
            rules={{
                required: {
                    value: true,
                    message: 'Event title is required!'
                },
                validate: value => eventsData.filter( item => item.title !== value ) || 'This title has already been written. You should type something else here.',
                minLength: {
                    value: 5,
                    message: 'Title should be at least 5 characters long.'
                }
            }}
            />
            { errors.title && <Text style={styles.error}>This space is required.</Text> }
            <CustomInput
            name="game"
            placeholder="Game title"
            control={control}
            rules={{
                required: {
                    value: true,
                    message: 'Game title is required!'
                },
                validate: value => allGames.filter( item => item.name === value ) || 'This game does not exist within our games list.',
            }}
            />
            { errors.game && <Text style={styles.error}>This space is required.</Text> }
            <CustomInput 
            name="description"
            placeholder="Event description"
            control={control}
            rules={{
                required: {
                    value: true,
                    message: 'Event description is required!'
                },
                maxLength: {
                    value: 300,
                    message: 'Description should not be longer than 300 characters.'
                }
            }}
            />
            { errors.description && <Text style={styles.error}>This space is required.</Text> }
            {/* put image upload here */}
            <CustomInput
            name="location"
            placeholder="Event location"
            control={control}
            rules={{
                required: {
                    value: true,
                    message: 'Event location is required!'
                },
                maxLength: {
                    value: 100,
                    message: 'Event location should not be longer than 100 characters.'
                }
            }}
            />
            { errors.location && <Text style={styles.error}>This space is required.</Text> }
            <Text style={styles.input}>from</Text>
            <Controller 
            control={control}
            rules={{
                required: true,
            }}
            render={
                ({ field: { onChange, onBlur, value } }) => (
                    <DatePicker modal
                    open={open}
                    format='DD-MM-YYYY'
                    date={dateFrom}
                    selected={(value && new Date(value)) || null}
                    onBlur={onBlur}
                    onChange={onChange}
                    onConfirm={(date) => {
                        setOpen(false);
                        setDateFrom(date);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    />
                )}
            name="dateFrom"
            />
            { errors.dateFrom && <Text style={styles.error}>This space is required.</Text> }
            <Text style={styles.input}>to</Text>
            <Controller 
            control={control}
            rules={{
                required: true,
            }}
            render={
                ({ field: { onChange, onBlur, value } }) => (
                    <DatePicker modal
                    open={open}
                    format='DD-MM-YYYY'
                    date={dateTo}
                    selected={(value && new Date(value)) || null}
                    onBlur={onBlur}
                    onChange={onChange}
                    onConfirm={(date) => {
                        setOpen(false);
                        setDateTo(date);
                    }}
                    onCancel={() => {
                        setOpen(false);
                    }}
                    />
                )}
            name="dateTo"
            />
            { errors.dateTo && <Text style={styles.error}>This space is required.</Text> }
            <Button
            title="ALL DONE!"
            style={styles.button}
            onPress={handleSubmit(handleEventData)}
            disabled={!isValid} {...props}
            />
        </View>
    )
}

export { AddEvent };