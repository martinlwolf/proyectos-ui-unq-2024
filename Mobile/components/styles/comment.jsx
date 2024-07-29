import { StyleSheet } from "react-native";

const Comment = StyleSheet.create({

    cardComment: {
        backgroundColor: 'white',
        flexDirection: 'row',
        gap: 16,
        padding: 10,
        maxWidth: '100%',
    },

    infoComment: {
        backgroundColor: 'white',
        flexDirection: 'column',
        width: '100%',
        gap: 10,
        padding: 10,
        flexShrink: 1
    },

    fontCommentBold: {
        fontWeight: 'bold',
        fontSize: 18,
        flexWrap: 'wrap',
        maxWidth: '100%'
    },

    fontComment: {
        fontSize: 18,
        flexShrink: 1,
        maxWidth: '100%',
        overflow: 'hidden'
    }
})

export default Comment