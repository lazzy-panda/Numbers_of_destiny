import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView} from 'react-native';
import Button from './ui/Button';
import {useTranslation} from 'react-i18next';
import Square from './ui/Square';
import Timeline from './ui/Timeline';
import {
    getMainDescription,
    getBirthdayNumber,
    getSquareNumbersDescription,
    missingFigures,
    getMultipleLineDescriptions,
    getLinesBasedOnMissingNumbers,
    calculatePersonalYear,
    getPersonalYearDescription,
    generateNineYearPeriods
} from '../services/Text'

const Results = ({name, surname, onReset, number, birthday, birthDate}) => {
    const {t, i18n} = useTranslation();
    const [activeSection, setActiveSection] = useState(null);
    const ranges = ["period_1", "period_2", "period_3", "period_4", "period_5"];
    const [activePeriod, setActivePeriod] = useState(ranges[0]);

    const handlePressPeriod = (periodId) => {
        setActivePeriod(periodId);
    };
    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const getEmoji = (sectionId) => {
        return activeSection === sectionId ? "🌕" : "🌒";
    };


    const personalYearNumber = calculatePersonalYear(birthDate);
    const personalYearDescription = getPersonalYearDescription(personalYearNumber);




    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{paddingBottom: 20}}>
            <View style={styles.container}>
                {/* Accordion Section 1 */}
                <Pressable onPress={() => toggleSection(1)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(1)}</Text>
                    <Text style={styles.tabHeader}>{t('main_description')}</Text>
                </Pressable>
                {activeSection === 1 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Text style={styles.text}>
                                {t(getMainDescription(number))}
                            </Text>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 2 */}
                <Pressable onPress={() => toggleSection(2)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(2)}</Text>
                    <Text style={styles.tabHeader}>{t('number_of_the_birthday')}</Text>
                </Pressable>
                {activeSection === 2 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Text style={styles.text}>
                                {t(getBirthdayNumber(birthday))}
                            </Text>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 3 */}
                <Pressable onPress={() => toggleSection(3)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(3)}</Text>
                    <Text style={styles.tabHeader}>{t('square')}</Text>
                </Pressable>
                {activeSection === 3 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Pressable onPress={() => {
                            }}>
                                <Square array={birthDate.split('').map(i => Number(i))}/>
                                <Text style={styles.tabHeader}>{t('existing_figures_description')}</Text>
                                {getSquareNumbersDescription(birthDate.split('').map(Number)).map((descKey, index) => (
                                    <Text key={index} style={styles.text}>
                                        {t(descKey)}
                                    </Text>
                                ))}
                                <Text style={[styles.tabHeader, {marginTop: 40}]}>
                                    {t('missing_figures_description')}</Text>
                                {missingFigures(birthDate.split('').map(Number)).map((descKey, index) => (
                                    <Text key={index} style={styles.text}>
                                        {t(descKey)}
                                    </Text>
                                ))}
                                <Text style={[styles.tabHeader, {marginTop: 40}]}>
                                    {t('strength_lines')}</Text>
                                {getMultipleLineDescriptions(birthDate.split('').map(Number)).map((descKey, index) => (
                                    <Text key={index} style={styles.text}>
                                        {t(descKey)}
                                    </Text>
                                ))
                                }
                                <Text style={[styles.tabHeader, {marginTop: 40}]}>
                                    {t('lines_of_weakness')}</Text>
                                {
                                    getLinesBasedOnMissingNumbers(birthDate.split('').map(Number)).map((descKey, index) => (
                                        <Text key={index} style={styles.text}>
                                            {t(descKey)}
                                        </Text>))
                                }
                            </Pressable>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 4 */}
                <Pressable onPress={() => toggleSection(4)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(4)}</Text>
                    <Text style={styles.tabHeader}>{t("looking_into_the_future")}</Text>
                </Pressable>
                {activeSection === 4 && (
                    <View style={styles.textContainer}>
                        <Timeline
                            ranges={generateNineYearPeriods(number)}
                            onPressPeriod={handlePressPeriod}
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
                            <Text style={styles.text}>{t(personalYearDescription)}</Text>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 5 */}
                <Pressable onPress={() => toggleSection(5)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(5)}</Text>
                    <Text style={styles.tabHeader}>Another Section</Text>
                </Pressable>
                {activeSection === 5 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Text style={styles.text}>
                                Text for another section...
                            </Text>
                        </Pressable>
                    </View>
                )}
                <View style={{marginTop: 20}}>
                    <Button onclick={onReset} text={t("back")} disabled={false}></Button>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    textContainer: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    text: {
        color: "white",
        fontFamily: 'Cochin',
        fontSize: 18,
        marginTop: 20,
    },
    tabHeaderContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#004254',
        padding: 10,
        borderRadius: 15,
        gap: 10,
        marginBottom: 10
    },
    tabHeader: {
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#FFEC86',

    },
    card: {
        borderRadius: 8,
        elevation: 4,
    },
    cardDescription: {
        fontFamily: 'Cochin',
        fontSize: 18,
        color: 'white',
        marginTop: 5,
    },
});

export default Results;
