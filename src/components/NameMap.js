import React from 'react';
import {Text, Pressable, View} from 'react-native';
import Square from './ui/Square';
import {useTranslation} from 'react-i18next';
import {styles} from '../styles';
import {analyzeName} from '../services/calculations';
import {missingNameNumbers, normalCountNameNumbers, redundantCountNameNumbers} from '../services/Text';

const NameMap = ({name}) => {
    const {t, i18n} = useTranslation();
    const nameArray = analyzeName(name);
    const missing = missingNameNumbers(nameArray);
    const normal = normalCountNameNumbers(nameArray);
    const redundant = redundantCountNameNumbers(nameArray);
    return (
        <View style={styles.textContainer}>
            <Pressable onPress={() => {
            }}>
                <Square array={analyzeName(name)}/>
                {missing.length && (
                    <View>
                        <Text style={styles.tabHeader}>{t('lines_of_weakness')}</Text>
                        {missing.map((descKey, index) => (
                            <Text key={index} style={styles.text}>
                                {t(descKey)}
                            </Text>
                        ))
                        }
                    </View>
                )}
                {normal.length && (
                    <View>
                        <Text style={[styles.tabHeader, {marginTop: 40}]}>{t('strength_lines')}</Text>
                        {normal.map((descKey, index) => (
                            <Text key={index} style={styles.text}>
                                {t(descKey)}
                            </Text>
                        ))
                        }
                    </View>
                )}
                {redundant.length && (
                    <View>
                        <Text style={[styles.tabHeader, {marginTop: 40}]}>{t('redundant_lines')}</Text>
                        {redundant.map((descKey, index) => (
                            <Text key={index} style={styles.text}>
                                {t(descKey)}
                            </Text>
                        ))
                        }
                    </View>
                )}
            </Pressable>
        </View>
    )
}
export default NameMap
