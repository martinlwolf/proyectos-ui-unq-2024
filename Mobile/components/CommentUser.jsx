import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import UserBTN from "./UserBTN"
import { useRouter } from "expo-router"
import Comment from "./styles/comment"
import RoundBTN from "./RoundBTN"

const CommentUser = ({comment}) => {
      const router = useRouter()
    return(
    <View style={Comment.cardComment}>
      <UserBTN id={comment.user.id} image={comment.user.image}/> 
      <View style={Comment.infoComment}>
          <Text style={Comment.fontCommentBold}>{comment.user.username}</Text>
          <Text style={Comment.fontComment} >{comment.text}</Text>
      </View>
    </View>
    )
}

export default CommentUser