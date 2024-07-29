import { FlatList, StyleSheet, Text, View } from 'react-native'
import CommentUser from './CommentUser'
import BoxAddComment from './BoxAddComment'



const CommentBox = ({ post }) => {

    return(
        <View style={styles.container}>
            <FlatList
            data={post.comments}
            renderItem={({ item }) => <CommentUser comment={item} />}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContent}
            />
            <BoxAddComment style={styles.boxAddComment} post={post}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'flex-start', 
      height: '100%',
    },
    listContent: {
      flexGrow: 1
    },
    boxAddComment: {
      width: '100%', // Para que ocupe todo el ancho disponible
    },
  });

export default CommentBox