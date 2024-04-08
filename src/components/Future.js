import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';
import Timeline from './ui/Timeline';
import {generateNineYearPeriods} from '../services/Text';
import {useTranslation} from 'react-i18next';
import { styles } from '../styles';

const Future = ({onclick, activePeriod, personalYearDescription, number}) => {
    const {t, i18n} = useTranslation();

    return (
        <View style={styles.textContainer}>
            <Timeline
                ranges={generateNineYearPeriods(number)}
                onPressPeriod={onclick}
                selectedPeriod={activePeriod}
            />
            {generateNineYearPeriods(number).map((period, index) => {
                if (period.id === activePeriod) {
                    return (
                        <View key={index} style={styles.card}>
                            <Pressable onPress={() => {
                            }}>
                                <Text style={styles.tabHeader}>{t(period.name)}</Text>
                                <Text style={styles.cardDescription}>{t(period.description)}</Text>
                            </Pressable>
                        </View>
                    );
                }
            })}
            <Pressable onPress={() => {}}>
                <Text style={[styles.tabHeader, {marginTop: 20}]}>{t("personal_year")}</Text>
                <Text style={styles.text}>{personalYearDescription}</Text>
            </Pressable>
        </View>
    )
}

export default Future
