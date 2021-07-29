import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
//data
import musicData from './data/music-data.json'

const Main = () => {
    return (
        <View>
            <FlatList
                data={musicData}
                renderItem={({ item }) =>
                    <Text>{item.title}</Text>
                }
            />
        </View>
    )
}

export default Main

const styles = StyleSheet.create({})
