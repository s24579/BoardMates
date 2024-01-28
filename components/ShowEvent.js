// ShowEvent.js
import React from "react";
import { View, Text, Image } from 'react-native';
import { eventsData } from "../services/EventDataMockup";

const constructorHasRun = useRef(false);

(() => {
    if (constructorHasRun.current !== false) 
        return; // if this fucks me up istg
    constructorHasRun.current = true;
    // super(props);
    state = {
        event: null
    }
    console.log('constructor invoked at ', window.performance.now());
})();

componentDidMount = () => {
    let eventId = props.route.params.eventId
    let selectedEvent = eventsData.filter(e => e.id === eventId) [0]
    setState({
        event: selectedEvent
    })
    props.navigation.setOptions({ 
        title: selectedEvent.title,
        description: selectedEvent.description,
    })
}

const showEvent = () => {
    if (state.event != null) {
        return (
        <View style={{ flex: 1 }}>
            <Text>
                {state.event.description}
            </Text>
            <Image source={{ uri: state.event.img }}
            style={{ height: 300, width: "100%" }} />
        </View>
        )
    }
}

export { showEvent };