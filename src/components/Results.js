import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import Button from './ui/Button';
import {useTranslation} from 'react-i18next';
import {
    getMainDescription,
    getBirthdayNumber,
    calculatePersonalYear,
    getPersonalYearDescription,
} from '../services/Text'
import TabHeader from './ui/TabHeader';
import PlainDescription from './PlainDescription';
import LoShuSquare from './LoShuSquare';
import Future from './Future';
import {styles} from '../styles';
import NameMap from './NameMap';

const Results = ({name, surname, middlename,  onReset, number, birthday, birthDate}) => {
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

    const personalYearNumber = calculatePersonalYear(birthDate);
    const personalYearDescription = getPersonalYearDescription(personalYearNumber);

    return (
        <ScrollView style={styles.scrollView} contentContainerStyle={{paddingBottom: 20}}>
            <View style={styles.container}>
                {/* Accordion Section 1 */}
                <TabHeader
                    text={t('main_description')}
                    onclick={toggleSection}
                    activeSection={activeSection}
                    sectionId={1}
                />
                {activeSection === 1 && (
                    <PlainDescription text={t(getMainDescription(number))}/>
                )}

                {/* Accordion Section 2 */}
                <TabHeader
                    text={t('number_of_the_birthday')}
                    onclick={toggleSection}
                    activeSection={activeSection}
                    sectionId={2}
                />
                {activeSection === 2 && (
                    <PlainDescription text={t(getBirthdayNumber(birthday))}/>
                )}

                {/* Accordion Section 3 */}
                <TabHeader
                    text={t('map_of_date_of_birth')}
                    onclick={toggleSection}
                    activeSection={activeSection}
                    sectionId={3}
                />
                {activeSection === 3 && (
                    <LoShuSquare birthDate={birthDate}/>
                )}

                {/* Accordion Section 4 */}
                <TabHeader
                    text={t('looking_into_the_future')}
                    onclick={toggleSection}
                    activeSection={activeSection}
                    sectionId={4}
                />

                {activeSection === 4 && (
                    <Future
                        onclick={handlePressPeriod}
                        number={number} activePeriod={activePeriod}
                        personalYearDescription={t(personalYearDescription)}
                    />
                )}

                {/* Accordion Section 5 */}
                <TabHeader
                    text={t('map_of_the_name')}
                    onclick={toggleSection}
                    activeSection={activeSection}
                    sectionId={5}
                />
                {activeSection === 5 && (

                    <NameMap name={`${name} ${surname} ${middlename}`}/>

                )}
                <View style={{marginTop: 20}}>
                    <Button onclick={onReset} text={t("back")} disabled={false}></Button>
                </View>
            </View>
        </ScrollView>
    );
};

export default Results;
