import { StyleSheet } from "react-native";

const Form = StyleSheet.create({

    view: {
        paddingTop: 10,
        height: '100%',
        backgroundColor: '#F1F1F2'
    },

    font: {
        fontFamily: 'Inter',
    },

    title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '800',
        marginVertical: 10
    },


    container: {
        height: 'auto',
        margin: 10,
        padding: 25,
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    label: {
        fontWeight: 'bold'
    },

    input: {
        marginVertical: 12,
        backgroundColor: '#F1F1F2',
        borderRadius: 50,
        paddingVertical: 10 ,
        paddingHorizontal: 16
    }
}); 

export default Form