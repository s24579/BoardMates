// Events.js
import React from 'react';
import { EventStyles as styles } from '../styles/EventStyles.js';
import { useNavigation } from '@react-navigation/native';
import { renderEventItem } from '../components/ItemView.js'
import { eventsData } from '../services/EventDataMockup.js';

const navigation = useNavigation();

const Events = () => {
    return (
        <View style={styles.container}>
            <Button                                                     // sure hope this Back button works
                title="<"
                onPress={() => { navigation.navigate('Home'); }}
            />
            <FlatList                                                   // list of events
                data={eventsData}
                keyExtractor={(item) => item.id}
                renderItem={renderEventItem}
            />
        </View>
    );
};

export { Events };