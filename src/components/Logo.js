import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Logo = ({numberOfFate}) => {
    // Determine marginTop based on numberOfFate's presence
    const logoStyle = [
        styles.logo,
        { marginTop: typeof numberOfFate !== 'undefined' && numberOfFate !== null ? 60 : -100 }
    ];

    if (typeof numberOfFate !== 'undefined' && numberOfFate !== null) {
        return (
            <View style={styles.fateContainer}>
                <ImageBackground style={logoStyle} source={require('../../assets/little_stars.png')}>
                    <Text style={styles.fateNumber}>{numberOfFate}</Text>
                </ImageBackground>
            </View>
        );
    }

    // Default content if numberOfFate is not provided or null
    return (
        <>
            <Image style={logoStyle} source={require('../../assets/logo.png')} />
            <Text style={styles.title}>Магия</Text>
            <Text style={styles.subtitle}>чисел</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Cochin',
        fontSize: 90,
        color: '#FFEC86',
        fontWeight: 'bold',
        marginBottom: -30,
        marginTop: -30,
    },
    subtitle: {
        fontFamily: 'Cochin',
        fontSize: 40,
        color: '#FFEC86',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: 130,
        height: 130,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fateContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    fateText: {
        fontFamily: 'Cochin',
        fontSize: 24,
        color: '#FFEC86',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fateNumber: {
        fontFamily: 'Cochin',
        fontSize: 70,
        color: '#FFEC86',
        fontWeight: 'bold',
    },
});

export default Logo;
