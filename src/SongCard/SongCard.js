import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from './SongCard.styles'

const SongCard = (props) => {
    return (
        <View>
            <Image source={{uri: props.song.imageUrl}}/>
            <View>
                <Text>{props.song.title}</Text>
                <View>
                    <Text>{props.song.artist}</Text>
                    <Text>{props.song.year}</Text>
                </View>

            </View>
        </View>
    )
}

export default SongCard


