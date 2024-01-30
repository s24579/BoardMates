// GamesList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { gamesListStyles as styles } from '../styles/GamesListStyles'
import GamesData from '../bgg/GamesData.json';

const GamesList = () => {
    const [topGames, setTopGames] = useState([]);
    const [sortByYear, setSortByYear] = useState(false); // State to track sorting mode
    const [numGamesDisplayed, setNumGamesDisplayed] = useState(50); // State to track number of games displayed
    const [searchQuery, setSearchQuery] = useState(''); // State to track search query

    useEffect(() => {
        // Function to sort games by rank
        const sortGamesByRank = () => {
            return [...GamesData].sort((a, b) => parseInt(a.rank) - parseInt(b.rank));
        };

        // Function to sort games by year
        const sortGamesByYear = () => {
            return [...GamesData].sort((a, b) => parseInt(b.yearpublished) - parseInt(a.yearpublished));
        };

        // Filter games based on search query
        const filteredGames = GamesData.filter((game) =>
            game.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Set top games based on sorting mode, filtered by search query, and limit to the number of games displayed
        const sortedGames = sortByYear ? sortGamesByYear() : sortGamesByRank();
        setTopGames(searchQuery === "" ? sortedGames : filteredGames.slice(0, numGamesDisplayed));
    }, [sortByYear, numGamesDisplayed, searchQuery]);

    const handleGameItemPress = (item) => {
        // Handle the press event here, for example:
        console.log('Clicked on game:', item.name);
    };

    const sortByRank = () => {
        // Sort by rank
        setSortByYear(false);
        // Reset numGamesDisplayed to 50
        setNumGamesDisplayed(50);
    };

    const sortByYearPressed = () => {
        // Sort by year
        setSortByYear(true);
        // Reset numGamesDisplayed to 50
        setNumGamesDisplayed(50);
    };

    const loadMoreGames = () => {
        // Increment the number of games displayed by 50
        setNumGamesDisplayed(prev => prev + 50);
    };

    const handleSearchInputChange = (text) => {
        // Update search query
        setSearchQuery(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.filterContainer}>
                        <Image style={styles.glass} source={require('../assets/magnifying-glass.png')} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search game..."
                        onChangeText={handleSearchInputChange}
                        value={searchQuery}
                    />
                    <Text style={styles.headingRight}>Filter by</Text>
                    <TouchableOpacity style={styles.filterItem} onPress={sortByRank}>
                        <Text style={styles.filterText}>Rank</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterItem} onPress={sortByYearPressed}>
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
                ListFooterComponent={() => (
                    <TouchableOpacity onPress={loadMoreGames} style={styles.loadMoreButton}>
                        <Text style={styles.loadMoreText}>Load more</Text>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.footer}>Data used is provided by BoardGameGeek.com.</Text>
        </View>
    );
};

export { GamesList };