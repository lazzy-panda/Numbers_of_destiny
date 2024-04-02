import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView} from 'react-native';

const Square = ({array}) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
            </View>
            <View style={styles.row}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
            </View>
            <View style={styles.row}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cell: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#fff9d8",
        margin: 1
    },
    row: {
        display: 'flex',
        flexDirection: "row"
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
});
export default Square
