import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import GamesData from '../bgg/GamesData.json';

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
});

export default GamesList;
