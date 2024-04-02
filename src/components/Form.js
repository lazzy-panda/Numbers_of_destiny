import React, {useEffect, useState} from 'react';
import {View, TextInput, StyleSheet, Pressable} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Button from './ui/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconButton from './ui/IconButton';
import { useTranslation } from 'react-i18next';

const Form = ({onSubmit}) => {
    const { t, i18n } = useTranslation();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const isFormComplete = name && surname && middlename && day && month && year;

    useEffect(() => {
        const loadFormData = async () => {
            const savedData = await AsyncStorage.getItem('formData');
            if (savedData) {
                const {name, surname, middlename, date} = JSON.parse(savedData);
                setName(name || '');
                setSurname(surname || '');
                setMiddlename(middlename || '');
                if (date) {
                    const [y, m, d] = date.split('-');
                    setYear(y);
                    setMonth(`${parseInt(m, 10)}`); // Remove leading zeros
                    setDay(`${parseInt(d, 10)}`);   // Remove leading zeros
                }
            }
        };
        loadFormData();
    }, []);

    const handleSubmit = async () => {
        const date = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        const formData = {name, surname, middlename, date};
        await AsyncStorage.setItem('formData', JSON.stringify(formData));
        onSubmit({name, surname, middlename, date});
    };

    const handleClearForm = async () => {
        // Reset form state
        setName('');
        setSurname('');
        setMiddlename('');
        setDay('');
        setMonth('');
        setYear('');

        // Clear stored data
        await AsyncStorage.removeItem('formData');
    };

    const years = () => {
        const startYear = 1960;
        const currentYear = new Date().getFullYear();
        return Array.from({length: currentYear - startYear + 1}, (v, k) => ({
            label: `${startYear + k}`,
            value: `${startYear + k}`
        }));
    };

    const months = () => {
        return Array.from({length: 12}, (v, k) => ({
            label: `${k + 1}`,
            value: `${k + 1}`
        }));
    };

    const days = () => {
        return Array.from({length: 31}, (v, k) => ({
            label: `${k + 1}`,
            value: `${k + 1}`
        }));
    };

    const toggleLanguage = async () => {
        const nextLanguage = i18n.language === 'en' ? 'ru' : 'en';
        try {
            await i18n.changeLanguage(nextLanguage);
            // Perform actions after language has changed, if necessary
        } catch (err) {
            console.log('something went wrong loading', err);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder={t('enterYourName')}
                placeholderTextColor="#B8B8B8"
            />

            <TextInput
                style={styles.input}
                value={surname}
                onChangeText={setSurname}
                placeholder={t('enterYourSurname')}
                placeholderTextColor="#B8B8B8"
            />

            <TextInput
                style={styles.input}
                value={middlename}
                onChangeText={setMiddlename}
                placeholder={t('enterYourMiddlename')}
                placeholderTextColor="#B8B8B8"
            />

            <View style={styles.row}>
                <RNPickerSelect
                    onValueChange={(value) => setDay(value)}
                    style={pickerSelectStyles}
                    placeholder={{label: t('day'), value: null}}
                    items={days()}
                    value={day}
                />
                <RNPickerSelect
                    onValueChange={(value) => setMonth(value)}
                    style={pickerSelectStyles}
                    placeholder={{label: t('month'), value: null}}
                    items={months()}
                    value={month}
                />
                <RNPickerSelect
                    onValueChange={(value) => setYear(value)}
                    style={pickerSelectStyles}
                    placeholder={{label: t("year"), value: null}}
                    items={years()}
                    value={year}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <Button onclick={handleSubmit} text={t('calculate')} disabled={!isFormComplete}/>
                <IconButton onclick={handleClearForm} text="🗑️" disabled={!isFormComplete}></IconButton>
            </View>
            <View style={{position: 'fixed', bottom: -150}}>
                <IconButton
                    disabled={false}
                    onclick={toggleLanguage}
                    text={i18n.language === 'en' ? '🇺🇸' : '🇷🇺'}
                />
            </View>
        </View>
    );
};

const borderColor = '#c59d1a';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 20,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    input: {
        height: 50,
        marginBottom: 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: borderColor,
        backgroundColor: '#004254',
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#FFEC86',
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        width: 100,
        height: 50,
        borderColor: borderColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#004254',
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#FFEC86',
        marginBottom: 15,
        marginTop: -15,
    },
    inputAndroid: {
        width: 100,
        height: 50,
        borderColor: borderColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#004254',
        fontFamily: 'Cochin',
        fontSize: 20,
        color: '#FFEC86',
        marginBottom: 15,
        marginTop: -15,
    },
    placeholder: {
        color: '#B8B8B8',
    },
});

export default Form;
