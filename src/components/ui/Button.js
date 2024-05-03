import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const Button = ({onclick, text, disabled}) => {
    return (
        <Pressable style={disabled ? styles.transparentButton : styles.button} onPress={onclick}>
            <LinearGradient
                colors={['transparent', '#045f6b']}
                style={styles.gradient}
                >
                <Text style={[styles.buttonText, {color: '#FFEC86'}]}>{text}</Text>
            </LinearGradient>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: '#917300',
        alignItems: 'center',
        borderRadius: 10,
        width: '85%'
    },
    transparentButton: {
        borderWidth: 1,
        opacity: 0.4,
        pointerEvents: 'none',
        borderColor: '#917300',
        alignItems: 'center',
        borderRadius: 10,
        width: '85%'
    },
    gradient: {
        padding: 10,
        borderRadius: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#FFEC86',
    },
});
export default Button
