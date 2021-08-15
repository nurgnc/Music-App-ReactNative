import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
//data
import musicData from './data/music-data.json'
//component
import SongCard from './components/SongCard'
import SearchBar from './components/SearchBar'

const Main = () => {
    const [list, setList] = useState(musicData);
    const renderSong = ({ item }) => <SongCard song={item} />

    renderSeperator = () => <View style={styles.seperator} />

    const handleSearch = text => {
        const filteredList = musicData.filter(song => {
            const searchedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });

        setList(filteredList);
    }

    return (
        <View style={styles.container}>
            <SearchBar onSearch={handleSearch} />
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={renderSong}
                ItemSeparatorComponent={renderSeperator}
            />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    seperator: {
        borderWidth: 1,
        borderColor: '#e0e0e0'
    }
})
