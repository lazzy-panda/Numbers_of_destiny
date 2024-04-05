import React from 'react';
import {ScrollView, View, Text, StyleSheet, Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';

const Timeline = ({ranges, onPressPeriod, selectedPeriod}) => {
    const {t, i18n} = useTranslation();
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}
        >
            <View style={styles.clockContainer}><Text style={styles.clock}>🕰️</Text></View>
            {ranges.map((range, index) => (
                <Pressable
                    style={styles.container}
                    key={index}
                    onPress={() => onPressPeriod(range.id)}
                >
                    <View
                        style={[styles.rangeContainer, selectedPeriod === range.id ? styles.rangeSelectedContainer : {}]}

                    >
                        <Text
                            style={[styles.rangeText, selectedPeriod === range.id ? styles.rangeSelectedText : {}]}
                        >{range.period} {t('years')} </Text>
                    </View>
                    <Text style={styles.dots}>...</Text>
                </Pressable>
            ))}
            <View style={styles.clockContainer}><Text style={styles.clock}>🕰️</Text></View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        padding: 20,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dots: {
        marginLeft: -10,
        marginRight: 5,
        color: "white",
        fontWeight: 'bold'
    },
    rangeContainer: {
        marginRight: 15,
        backgroundColor: '#004254',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    rangeSelectedContainer: {
        backgroundColor: '#ffdf84',
    },
    rangeText: {
        fontSize: 16,
        color: "white",
        fontFamily: 'Cochin',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    rangeSelectedText: {
        color: '#004254',
    },
    clock: {
        fontSize: 25
    },
    clockContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    }
});

export default Timeline
