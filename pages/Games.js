//Games.js
import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { readCSVData } from '../bgg/csvUtils';

const Games = () => {
    const [csvData, setCSVData] = useState([]);

    useEffect(() => {
        const filePath = '../bgg/boardgames_ranks.csv';

        readCSVData(filePath)
            .then((data) => {
                setCSVData(data);
            })
            .catch((error) => {
                console.error('Error reading CSV:', error);
            });
    }, []);

    return (
        <View>
            <Text>CSV Data:</Text>
            <FlatList
                data={csvData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{`ID: ${item.id}, Name: ${item.name}`}</Text>
                        {/* Add more fields as needed */}
                    </View>
                )}
            />
        </View>
    );
};

export default Games;
