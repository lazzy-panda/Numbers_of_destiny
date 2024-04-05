import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, SafeAreaView} from 'react-native';
import Button from './ui/Button';
import {useTranslation} from 'react-i18next';
import Square from './ui/Square';
import Timeline from './ui/Timeline';

const Results = ({name, surname, onReset, number, birthday, birthDate}) => {
    const {t, i18n} = useTranslation();
    const [activeSection, setActiveSection] = useState(null);
    const ranges = ["period_1", "period_2", "period_3", "period_4", "period_5"];

    // Установите начальное значение activePeriod равным первому элементу массива ranges
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

    const getMainDescription = (number) => {
        switch (number) {
            case 1:
                return t('one_description');
            case 2:
                return t('two_description');
            case 3:
                return t('three_description');
            case 4:
                return t('four_description');
            case 5:
                return t('five_description');
            case 6:
                return t('six_description');
            case 7:
                return t('seven_description');
            case 8:
                return t('eight_description');
            case 9:
                return t('nine_description');
            case 11:
                return t('eleven_description');
            case 22:
                return t('twenty_two_description');
        }
    }
    const getBirthdayNumber = (number) => {
        switch (number) {
            case 1:
                return t('1st_day');
            case 2:
                return t('2st_day');
            case 3:
                return t('3st_day');
            case 4:
                return t('4st_day');
            case 5:
                return t('5st_day');
            case 6:
                return t('6st_day');
            case 7:
                return t('7st_day');
            case 8:
                return t('8st_day');
            case 9:
                return t('9st_day');
            case 10:
                return t('10st_day');
            case 11:
                return t('11st_day');
            case 12:
                return t('12st_day');
            case 13:
                return t('13st_day');
            case 14:
                return t('14st_day');
            case 15:
                return t('15st_day');
            case 16:
                return t('16st_day');
            case 17:
                return t('17st_day');
            case 18:
                return t('18st_day');
            case 19:
                return t('19st_day');
            case 20:
                return t('20st_day');
            case 21:
                return t('21st_day');
            case 22:
                return t('22st_day');
            case 23:
                return t('23st_day');
            case 24:
                return t('24st_day');
            case 25:
                return t('25st_day');
            case 26:
                return t('26st_day');
            case 27:
                return t('27st_day');
            case 28:
                return t('28st_day');
            case 29:
                return t('29st_day');
            case 30:
                return t('30st_day');
            case 31:
                return t('31st_day');
        }
    }

    const getSquareNumbersDescription = (array) => {
        let count = {
            '1': 0, '2': 0, '3': 0,
            '4': 0, '5': 0, '6': 0,
            '7': 0, '8': 0, '9': 0,
        };

        array.forEach(num => {
            if (count.hasOwnProperty(num)) {
                count[num] += 1;
            }
        });

        let descriptions = [];
        Object.keys(count).forEach(key => {
            if (count[key] > 0) {
                let occurrences = count[key] > 4 ? 4 : count[key];
                descriptions.push(`${occurrences}_${key}`);
            }
        });

        return descriptions; // Return an array of descriptions
    };

    const missingFigures = (array) => {
        // Initialize an object with all digits set to false (indicating "missing")
        let digitsPresence = {
            '1': false, '2': false, '3': false,
            '4': false, '5': false, '6': false,
            '7': false, '8': false, '9': false,
        };

        // Mark digits found in the array as true
        array.forEach(num => {
            if (digitsPresence.hasOwnProperty(num.toString())) {
                digitsPresence[num] = true;
            }
        });

        // Collect missing digits
        let missingDescriptions = [];
        Object.keys(digitsPresence).forEach(key => {
            if (!digitsPresence[key]) {
                missingDescriptions.push(`missing_${key}`);
            }
        });

        return missingDescriptions;
    };

    const getMultipleLineDescriptions = (array) => {
        // Filter out invalid numbers and remove duplicates
        const validNumbers = Array.from(new Set(array.filter(num => num >= 1 && num <= 9)));

        // Sort the numbers to ensure the sequence can match patterns
        const sortedKey = validNumbers.sort().join('');

        // Define patterns for each line
        const patterns = {
            '159': "the_line_of_determination",
            '357': "the_line_of_compassion",
            '369': "the_line_of_mind",
            '258': "the_line_of_emotional_balance",
            '147': "the_line_of_practicality",
            '123': "planning_line",
            '456': "the_line_of_willpower",
            '789': "activity_line",
        };

        // Array to hold all detected lines
        let detectedLines = [];

        // Check each pattern to see if sortedKey contains all the digits for a line
        Object.entries(patterns).forEach(([pattern, line]) => {
            if (pattern.split('').every(digit => sortedKey.includes(digit))) {
                detectedLines.push(line);
            }
        });

        // Return all detected lines or indicate none were found
        return detectedLines.length > 0 ? detectedLines : ["no_specific_line_detected"];
    };
    const getLinesBasedOnMissingNumbers = (array) => {
        // Filter out invalid numbers and remove duplicates
        const validNumbers = Array.from(new Set(array.filter(num => num >= 1 && num <= 9)));

        // Convert the array to a Set for efficient presence checks
        const numbersPresent = new Set(validNumbers);

        // Define patterns for lines based on missing numbers with keys as identifiers
        const patterns = {
            '159': "the_line_of_indecision",
            '357': "the_line_of_skepticism",
            '369': "the_line_of_bad_memory",
            '258': "the_line_of_emotional_sensitivity",
            '147': "the_line_of_impracticality",
            '456': "the_line_of_disappointments",
            '789': "the_line_of_doubt",
        };

        // Array to hold all detected line keys based on missing numbers
        let detectedLineKeys = [];

        // Check each pattern to see if all of the digits for a line are missing
        Object.entries(patterns).forEach(([pattern, key]) => {
            if (pattern.split('').every(digit => !numbersPresent.has(Number(digit)))) {
                detectedLineKeys.push(key);
            }
        });

        // Return all detected line keys or indicate that no specific line is detected based on absences
        return detectedLineKeys.length > 0 ? detectedLineKeys : ["no_specific_line_detected_based_on_absence"];
    };

    const calculatePersonalYear = (birthDate) => {
        // Extract the current year
        const currentYear = new Date().getFullYear();

        // Deconstruct the birthDate into year, month, and day
        const [, month, day] = birthDate.split('-').map(Number);

        // Convert day, month, and current year to string and concatenate
        const dateString = `${day}${month}${currentYear}`;

        // Reduce dateString to a single digit sum
        let sum = dateString.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);

        // Function to reduce sum to a single digit
        const reduceToSingleDigit = (num) => {
            while (num > 9) {
                num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
            }
            return num;
        };

        // Return the final Personal Year Number
        return reduceToSingleDigit(sum);
    };
    const getPersonalYearDescription = (personalYearNumber) => {
        const yearDescriptions = {
            1: "year_1",
            2: "year_2",
            3: "year_3",
            4: "year_4",
            5: "year_5",
            6: "year_6",
            7: "year_7",
            8: "year_8",
            9: "year_9",
        };
        return yearDescriptions[personalYearNumber] || "Unknown personal year number";
    };
    const personalYearNumber = calculatePersonalYear(birthDate); // Assuming this function is defined as before
    const personalYearDescription = getPersonalYearDescription(personalYearNumber);

    const generateNineYearPeriods = (destinyNumber) => {
        const startYear = 36 - destinyNumber;
        let index = 1;
        let periods = [];

        if (startYear > 1) { // Ensuring there's a range to display
            periods.push({
                id: `period_${index}`,
                period: `1-${startYear}`,
                name: t(`period_1`),
                description: t(`description_period_1`),

            });
        }

        for (let year = startYear + 1; year <= 100; year += 9) {
            const start = year;
            const end = Math.min(year + 8, 100); // Ensure not exceeding 100
            index++;
            periods.push(
                {
                    id: `period_${index}`,
                    period: `${start}-${end}`,
                    name: t(`period_${index}`),
                    description: t(`description_period_${index}`),
                }
            );
        }
        return periods;
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
                    <Text style={styles.tabHeader}>{t('number_of_the_birthday')}</Text>
                </Pressable>
                {activeSection === 2 && (
                    <View style={styles.textContainer}>
                        <Pressable onPress={() => {
                        }}>
                            <Text style={styles.text}>
                                {getBirthdayNumber(birthday)}
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
                                        <Pressable onPress={() => {}}>
                                            <Text style={styles.tabHeader}>{period.name}</Text>
                                            <Text style={styles.cardDescription}>{period.description}</Text>
                                        </Pressable>
                                    </View>
                                );
                            }
                        })}
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
        padding: 20,
        elevation: 4,
        marginTop: -20
    },
    cardDescription: {
        fontFamily: 'Cochin',
        fontSize: 18,
        color: 'white',
        marginTop: 5,
    },
});

export default Results;
