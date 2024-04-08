import React from 'react';
import { Text, Pressable } from 'react-native';
import {styles} from '../../styles';

const TabHeader = ({onclick, activeSection, sectionId, text}) => {
    const getEmoji = (sectionId) => {
        return activeSection === sectionId ? "🌕" : "🌒";
    };

    return (
        <Pressable onPress={() => onclick(sectionId)} style={styles.tabHeaderContainer}>
            <Text style={styles.tabHeader}>{getEmoji(sectionId)}</Text>
            <Text style={styles.tabHeader}>{text}</Text>
        </Pressable>
    )
}
export default TabHeader
