import { useContext, useState } from "react"
import { Pressable, Text, TextInput, View } from "react-native"
import Form from "./styles/form"
import { postComment } from "../service/Api"
import Comment from "./styles/comment"
import { ContextState, MultiStateContext } from "./context/ContextState"

const BoxAddComment = ({post}) => {

    const [newComment, setNewComment] = useState("")
    const {touchComment, setTouchComment} = useContext(MultiStateContext)

    const handleSubmit = () => {
          postComment(post.id, newComment)
          setNewComment("")
          setTouchComment(!touchComment)
      }

    const handleCommentChange = (comment) => {
        setNewComment(comment)
      }
    
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 16}}>
            <View style={{flex: 1}}>
                <TextInput
                style={Form.input}
                placeholder="Add comment"
                onChangeText={handleCommentChange}
                onSubmitEditing={handleSubmit}
                value={newComment}
                />
            </View>


        </View>
    )
    
}

export default BoxAddComment