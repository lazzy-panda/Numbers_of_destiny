import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from '../styles';
const PlainDescription = ({text}) => {
    return (
        <View style={styles.textContainer}>
            <Pressable onPress={() => {}}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}

export default PlainDescription
