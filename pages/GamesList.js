//GamesList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GamesData from '../bgg/GamesData.json';

const GamesList = () => {
    const [topGames, setTopGames] = useState([]);


    useEffect(() => {

        const xxd = GamesData.map(obj=>{
            return {
                name: obj.name,
                rank: obj.rank,
                yearpublished: obj.yearpublished,
            }

        })
            .sort((a,b)=>{
                return parseInt(a.rank)-parseInt(b.rank)
            })
            .slice(0, 10)
        console.log(xxd);
        setTopGames(xxd);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Top 10 Games</Text>
            <FlatList
                data={topGames}
                renderItem={({ item }) => (
                    <View style={styles.gameItem}>
                        <Text>{item.name}</Text>
                        <Text>Year Published: {item.yearpublished}</Text>
                        <Text>Rank: {item.rank}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    gameItem: {
        marginBottom: 10,
    },
});

export default GamesList;
