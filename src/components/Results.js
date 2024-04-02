import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView} from 'react-native';
import Button from './ui/Button';
import {useTranslation} from 'react-i18next';
import Square from './ui/Square';

const Results = ({name, surname, onReset, number}) => {
    const { t, i18n } = useTranslation();
    const [activeSection, setActiveSection] = useState(null);
    const toggleSection = (sectionId) => {
        setActiveSection(activeSection === sectionId ? null : sectionId);
    };

    const getEmoji = (sectionId) => {
        return activeSection === sectionId ? "🌕" : "🌒";
    };

    const getMainDescription = (number) => {
        switch (number) {
            case 1: return t('one_description');
            case 2: return t('two_description');
            case 3: return t('three_description');
            case 4: return t('four_description');
            case 5: return t('five_description');
            case 6: return t('six_description');
            case 7: return t('seven_description');
            case 8: return t('eight_description');
            case 9: return t('nine_description');
            case 11: return t('eleven_description');
            case 22: return t('twenty_two_description');
        }
    }

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
                                {getMainDescription(number)}
                            </Text>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 2 */}
                <Pressable onPress={() => toggleSection(2)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(2)}</Text>
                    <Text style={styles.tabHeader}>{t('square')}</Text>
                </Pressable>
                {activeSection === 2 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Square/>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 3 */}
                <Pressable onPress={() => toggleSection(3)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(3)}</Text>
                    <Text style={styles.tabHeader}>Результаты</Text>
                </Pressable>
                {activeSection === 3 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </Text>
                        </Pressable>
                    </View>
                )}

                {/* Accordion Section 4 */}
                <Pressable onPress={() => toggleSection(4)} style={styles.tabHeaderContainer}>
                    <Text style={styles.tabHeader}>{getEmoji(4)}</Text>
                    <Text style={styles.tabHeader}>Another Section</Text>
                </Pressable>
                {activeSection === 4 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Text style={styles.text}>
                                Text for another section...
                            </Text>
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
        // width: "90%",
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
    }
});

export default Results;
