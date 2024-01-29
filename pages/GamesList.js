// GamesList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GamesData from '../bgg/GamesData.json';
import { gamesListStyles as styles } from '../styles/GamesListStyles.js'

const GamesList = () => {
    const [topGames, setTopGames] = useState([]);

    useEffect(() => {
        const xxd = GamesData.map(obj => {
            return {
                name: obj.name,
                rank: obj.rank,
                yearpublished: obj.yearpublished,
            }
        })
            .sort((a, b) => parseInt(a.rank) - parseInt(b.rank));

        setTopGames(xxd);
    }, []);

    const handleGameItemPress = (item) => {
        // Handle the press event here, for example:
        console.log('Clicked on game:', item.name);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headingLeft}>List Of Games</Text>
                <View style={styles.filterContainer}>
                    <TouchableOpacity style={[styles.filterItem]}>
                        <Image style={styles.glass} source={require('../assets/magnifying-glass.png')} />
                    </TouchableOpacity>
                    <Text style={styles.headingRight}>Filter by</Text>
                    <TouchableOpacity style={styles.filterItem}>
                        <Text style={styles.filterText}>Rank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterItem}>
                        <Text style={styles.filterText}>Year</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={topGames}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleGameItemPress(item)} style={styles.gameItem}>
                        <Text>Rank: {item.rank}</Text>
                        <Text>{item.name}</Text>
                        <Text>Year: {item.yearpublished}</Text>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.footer}>Data used is provided by BoardGameGeek.com.</Text>
        </View>
    );
};


export { GamesList };