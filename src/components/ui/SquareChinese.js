import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SquareChinese = ({ array }) => {
    const [cellContent, setCellContent] = useState({
        ones: '',
        twos: '',
        threes: '',
        fours: '',
        fives: '',
        sixes: '',
        sevens: '',
        eights: '',
        nines: ''
    });

    useEffect(() => {
        // Initialize an object to hold content for each cell
        let content = {
            ones: '',
            twos: '',
            threes: '',
            fours: '',
            fives: '',
            sixes: '',
            sevens: '',
            eights: '',
            nines: ''
        };

        // Map through the array and concatenate numbers to the correct cells
        array.forEach(num => {
            switch(num) {
                case 1: content.ones += '1 '; break;
                case 2: content.twos += '2 '; break;
                case 3: content.threes += '3 '; break;
                case 4: content.fours += '4 '; break;
                case 5: content.fives += '5 '; break;
                case 6: content.sixes += '6 '; break;
                case 7: content.sevens += '7 '; break;
                case 8: content.eights += '8 '; break;
                case 9: content.nines += '9 '; break;
                default: break;
            }
        });

        // Update the state with the new content
        setCellContent(content);
    }, [array]); // Ensure this effect runs when array changes

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.fours.trim()}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.nines.trim()}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.twos.trim()}</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.threes.trim()}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.fives.trim()}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.sevens.trim()}</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.eights.trim()}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.ones.trim()}</Text></View>
                <View style={styles.cell}><Text style={styles.text}>{cellContent.sixes.trim()}</Text></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cell: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: "#fff9d8",
        margin: 1,
        padding: 5,
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        display: 'flex',
    },
    row: {
        flexDirection: "row"
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    },
    text: {
        fontFamily: 'Cochin',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff9d8',
    }
});

export default SquareChinese;
