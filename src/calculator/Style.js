import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    container: {
        flex: 1
    },

    resultdisplay: {
        flex: 4,
        backgroundColor: '#193441'
    },

    buttons: {
        flex: 8,
        backgroundColor: '#3E606F'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#91AA9D'
    },
    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },
    displayContainer: {
        flex: 2,
        backgroundColor: '#193441',
        justifyContent: 'center'
    },

    displayText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    },
    inputButtonHighlighted: {
        backgroundColor: '#193441'
    },
});

export default Style;