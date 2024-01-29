// ShowEvent.js
import React, { useEffect, useState } from "react";
import { View, Text, Image } from 'react-native';
import { eventsData } from "../services/EventDataMockup";

const showEvent = () => {
    const constructorHasRun = useRef(false);
    const [event, setEvent] = useState(null)

    (() => {
        if (constructorHasRun.current !== false) 
            return; // if this fucks me up istg
        constructorHasRun.current = true;
        // super(props);
        setEvent(event);
        console.log('constructor invoked at ', window.performance.now());
    })();

    useEffect(() => {
        let eventId = props.route.params.eventId
        let selectedEvent = eventsData.filter(e => e.id === eventId) [0]
        setEvent(selectedEvent)

        props.navigation.setOptions({ 
            title: selectedEvent.title,
            description: selectedEvent.description,
        })
    })

    if (event != null) {
        return (
        <View style={{ flex: 1 }}>
            <Text>
                {event.description}
            </Text>
            <Image source={{ uri: event.img }}
            style={{ height: 300, width: "100%" }} />
        </View>
        )
    }
    
}

export { showEvent };