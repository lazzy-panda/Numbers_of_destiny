import React from 'react';
import {Text, Pressable, View} from 'react-native';
import Square from './ui/Square';
import {
    getLinesBasedOnMissingNumbers,
    getMultipleLineDescriptions,
    getSquareNumbersDescription,
    missingFigures
} from '../services/Text';
import {useTranslation} from 'react-i18next';
import {styles} from '../styles';
import SquareChinese from './ui/SquareChinese';

const LoShuSquare = ({birthDate}) => {
    const {t, i18n} = useTranslation();
    const strengthLines = getMultipleLineDescriptions(birthDate.split('').map(Number));
    return (
        <View style={styles.textContainer}>
            <Pressable onPress={() => {}}>
                <Text style={[styles.tabHeader, {marginBottom: 10}]}>
                    {t('pythagorean_square_and_the_chinese_square')}</Text>
                <View style={{display: 'flex', flexDirection: 'row', marginBottom: 10}}>
                    <Square array={birthDate.split('').map(i => Number(i))}/>
                    <SquareChinese array={birthDate.split('').map(i => Number(i))}/>
                </View>
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


                {strengthLines[0] !== 'no_specific_line_detected' && (
                    <View>
                        <Text style={[styles.tabHeader, {marginTop: 40}]}>
                            {t('strength_lines')}</Text>
                        {strengthLines.map((descKey, index) => (
                            <Text key={index} style={styles.text}>
                                {t(descKey)}
                            </Text>
                        ))
                        }
                    </View>
                )}


                <Text style={[styles.tabHeader, {marginTop: 40}]}>
                    {t('lines_of_weakness')}</Text>
                {
                    getLinesBasedOnMissingNumbers(birthDate.split('').map(Number)).map((descKey, index) => (
                        <Text key={index} style={styles.text}>
                            {t(descKey)}
                        </Text>))
                }
            </Pressable>
        </View>
    )
}
export default LoShuSquare
