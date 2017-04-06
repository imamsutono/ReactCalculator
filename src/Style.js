import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    appsTitle: {
        color: '#FFA000',
        fontSize: 24,
        textAlign: 'center'
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center'
    },
    displayText: {
        color: '#FFA000',
        fontSize: 38,
        textAlign: 'right',
        padding: 20
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#FFA000'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#FFE082'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: '200',
        color: '#F5F5F5'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    inputButtonHighlighted: {
        backgroundColor: '#FFB300'
    }
});

export default Style;
