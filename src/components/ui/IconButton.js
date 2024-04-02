import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView} from 'react-native';

const IconButton = ({onclick, text, disabled}) => {
    return (
        <Pressable style={disabled ? styles.transparentButton : styles.button} onPress={onclick}>
                <Text style={[styles.buttonText]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
    },
    transparentButton: {
        opacity: 0.4,
        pointerEvents: 'none',
    },
    gradient: {
        display: 'flex',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 30,
    },
});
export default IconButton
