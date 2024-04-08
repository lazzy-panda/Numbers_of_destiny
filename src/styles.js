import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    textContainer: {
        width: '100%',
        padding: 15,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    text: {
        color: "white",
        fontFamily: 'Cochin',
        fontSize: 18,
        marginTop: 20,
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
