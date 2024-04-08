import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Keyboard, TouchableWithoutFeedback, Pressable} from 'react-native';
import Form from './src/components/Form';
import Logo from './src/components/Logo';
import Results from './src/components/Results';
import {numberOfFate} from './src/services/calculations';
import './i18n';

const App = () => {
    const [formData, setFormData] = useState(null);
    const logoNumber = numberOfFate(formData?.date);
    const birthday = Number(formData?.date.split('-')[2]);
    const birthDate = formData?.date;
    const handleSubmit = (data) => {
        setFormData(data);
    };

    const handleReset = () => {
        setFormData(null);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>

                <Image style={styles.background} source={require('./assets/background.png')}/>
                <Image style={styles.bottomImage} source={require('./assets/image_bottom.png')}/>
                <Image style={styles.topImage} source={require('./assets/image_top.png')}/>
                <Image style={styles.stars} source={require('./assets/stars.png')}/>
                <View style={styles.content}>
                    <Logo numberOfFate={logoNumber}/>
                    {!formData ? (
                        <Form onSubmit={handleSubmit}/>
                    ) : (
                        <Results
                            name={formData.name}
                            surname={formData.surname}
                            middlename={formData.middlename}
                            birthday={birthday}
                            birthDate={birthDate}
                            onReset={handleReset}
                            number={logoNumber}
                        />
                    )}

                </View>
            </View>
        </TouchableWithoutFeedback>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topImage: {
        width: '100%',
        position: 'absolute',
        top: -60
    },
    bottomImage: {
        // width: '100%',
        position: 'absolute',
        bottom: -60
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    stars: {
        width: '100%',
        height: '100%',
    },


});

export default App;
