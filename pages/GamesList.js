import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
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
            <Text style={styles.footer}>Data used is provided by BoardGameGeek.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    headingLeft: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    glass: {
        height: 20,
        width: 20,
        marginRight: 15,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        minWidth:150,
        maxWidth:250,
        marginRight:50,
    },
    headingRight: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    filterText: {
        fontSize: 17,
    },
    filterItem: {
        marginLeft: 15,
    },
    gameItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        padding: 16,
        backgroundColor: '#3498db',
        borderWidth: 1,
        borderColor: '#3498db',
        borderRadius: 8,
    },
    footer: {
        fontSize: 10,
        fontWeight: 'bold',
        marginLeft: 'auto',
    },
    loadMoreButton: {
        alignItems: 'center',
        marginTop: 20,
    },
    loadMoreText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#3498db',
    },
});

export default GamesList;
