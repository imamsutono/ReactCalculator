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
    calculationText: {
        color: '#757575',
        textAlign: 'right',
        padding: 4
    },
    displayText: {
        color: '#FFA000',
        fontSize: 38,
        textAlign: 'right',
        padding: 16
    },

    inputContainer: {
        flex: 7,
        backgroundColor: '#EEEEEE'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#BDBDBD'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: '200',
        color: '#616161'
    },
    inputButtonNumber: {
       backgroundColor: '#FFA000' 
    },
    inputButtonTextNumber: {
        color: '#EAEAEA'
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
