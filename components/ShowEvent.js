// components/ShowEvent.js
import React, { useEffect, useState } from "react";
import { View, Text, Image } from 'react-native';
import { eventsData } from "../services/EventDataMockup";

const showEvent = () => {
    const constructorHasRun = useRef(false);
    const [event, setEvent] = useState(null)

    (() => {                                                                    // funny constructor made out of hooks
        if (constructorHasRun.current !== false) 
            return; // if this fucks me up istg
        constructorHasRun.current = true;
        // super(props);
        setEvent(event);
        console.log('constructor invoked at ', window.performance.now());
    })();

    useEffect(() => {                                                           // shows the event based on its id
        let eventId = props.route.params.eventId
        let selectedEvent = eventsData.filter(e => e.id === eventId) [0]
        setEvent(selectedEvent)

        props.navigation.setOptions({                                           // sets the title and description of the event
            title: selectedEvent.title,
            description: selectedEvent.description,
        })
    })

    if (event != null) {
        return (                                                                // displays the (Placeholder) description and image
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