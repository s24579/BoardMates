// Map.js
import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { Callout, MapView, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MapStyles as styles } from '../styles/MapStyles.js';
import { Text, Slider, Icon, SearchBar, Button } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native';
import { Geolocation } from '@react-native-community/geolocation';
import { eventsData } from '../services/EventDataMockup.js';

const navigation = useNavigation();
const constructorHasRun = useRef(false);

// onRegionChange = (region) => {
//     setState({ region });
// };

const getInitialState = () => {
    return {
      region: {
        latitude: 54.35203,
        longitude: 18.6466,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
};

const mapSection = () => {

    const getMyLocation = () => {
        Geolocation.getCurrentPosition(locale => {
            mapRef.animateRegion({
                latitude: locale.coords.latitude,
                longitude: locale.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            })
            setLatitude(locale.coords.latitude);
            setLongitude(locale.coords.longitude);
        })
    }

    const selectEvent = (event) => {
        props.navigation.navigate(
            "ShowEvent",
            {
                eventId: event.id
            }
        )
    }

    return (
        <View style={styles.mapSection}>
            <MapView style={styles.map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            onMapReady={() => {getMyLocation}}
            ref={(ref) => { mapRef = ref }}
            initialRegion={getInitialState}
            // region={state.region}
            // onRegionChange={onRegionChange}
            >
                {
                    events.map((coolEvent) => {
                        return (
                            <Marker coordinate={{ latitude: coolEvent.latitude, longitude: coolEvent.longitude }}>
                                <Callout style={styles.callout} onPress={() => { selectEvent(coolEvent) }}>
                                    <View style={styles.insideCallout}>
                                        <Text>{ coolEvent.title }</Text>
                                        <Image style={{ height: 150, width: 100 }} source={{ uri: coolEvent.img }} />
                                        <Text>Tap for more details</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        )
                    })
                }
            </MapView>
        </View>
    )
}

const searchSection = () => {

    const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
        const deg2rad = (deg) => { return deg = (Math.PI / 180) }

        var R = 6371;                                                          // Earth's radius in kilometers
        var dLat = deg2rad(lat2 - lat1);                                       // deltas (differences) of latitudes
        var dLon = deg2rad(lon2 - lon1);                                       // deltas (differences) of longitudes
        var havs =                                                              
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +                          // haversine formula (look it up) determines the
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *                // great-circle dist. between two points on a sphere
            Math.sin(dLon / 2) * Math.sin(dLon / 2)                            // given their longs and lats
            ;
        var archavs = 2 * Math.atan2(Math.sqrt(havs), Math.sqrt(1 - havs));
        var dist = R * archavs;                                                // full distance in kilometers
        return dist;
    }

    const handleSearch = () => {
        let searchedEvents = eventsData.filter(e => e.title.toLowerCase().includes(searchString.toLowerCase()) 
        && getDistanceFromLatLonInKm(latitude, longitude, e.latitude, e.longitude) < distance);
        setEvents(searchedEvents);
    }

    const handleReset = () => {
        setEvents(eventsData);
    }

    return (
        <View style={styles.searchSection}>
            <SearchBar
            placeholder="Search for board mates..."
            // ref={search => state.search = search}
            onChangeText={(text) => { setSearchString(text) }}
            value={searchString}
            round={true}
            lightTheme={true}
            containerStyle={styles.searchBar}
            />
            <View style={{ padding: 10 }}>
                <Text>
                    Events from {distance.toString()} km away
                </Text>
                <Slider 
                value={distance}
                minimumValue={1}
                maximumValue={50}
                onValueChange={(value) => { setDistance(value) }}
                step={1}
                allowTouchTrack
                thumbStyle={styles.sliderThumb}
                />
            </View>
            <View style={{ justifyContent: "space-between", flexDirection: "row"}}>
                <Button 
                onPress={() => {handleReset()}}
                containerStyle={styles.button}>
                    <Text style={styles.buttonText}>
                        Reset
                    </Text>
                    <Icon name='refresh' color='white' />
                </Button>
                <Button
                onPress={() => {handleSearch()}}
                containerStyle={styles.button}>
                    <Text style={styles.buttonText}>
                        Search
                    </Text>
                    <Icon name='search' color='white' />
                </Button>
            </View>
        </View>
    )
}

const Map = () => {
    const [latitude, setLatitude] = useState(0.0);
    const [longitude, setLongitude] = useState(0.0);
    const [events, setEvents] = useState([]);
    const [searchString, setSearchString] = useState("");
    const [distance, setDistance] = useState(0.0);
    const [selectedEvent, setSelectedEvent] = useState(null);
    // const [state, changeState] = useState({
    //     latitude: 0.0,
    //     longitude: 0.0,
    //     events: [],
    //     searchString: "",
    //     distance: 0,
    //     selectedEvent: null
    // })

    (() => {
        if (constructorHasRun.current !== false) 
            return; // if this fucks me up istg UPDATE: it ~kinda~ happened lmao
        constructorHasRun.current = true;
        // super(props);
        setLatitude(54.35203);
        setLongitude(18.6466);
        setDistance(40);
        useEffect(() => {
            setEvents(eventsData)
        })

        console.log('constructor invoked at ', window.performance.now());
    })();

    return (
        <View style={styles.container}>
            <Button
                title="<"
                onPress={() => { navigation.navigate('Home'); }}
            />
            {searchSection}
            {mapSection}
        </View>
    );
};

export { Map };