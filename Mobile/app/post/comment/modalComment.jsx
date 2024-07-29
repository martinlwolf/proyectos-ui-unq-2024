import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import CommentScroll from "../../../components/CommentScroll";
import TikTokSpinner from "../../../components/TikTokSpinner"
import { ContextState } from "../../../components/context/ContextState";
import { useEffect, useState } from "react";


const ModalComment = () => {

    const [updateComment, setUpdateComment] = useState(false)
    const { post } = useLocalSearchParams();
    const postData = post ? JSON.parse(post.toString()): {};
    useEffect(()=>{}, [updateComment])

    return (
        <View style={{flex:1}}>
            <ContextState>
                <CommentScroll post={postData} setUpdateComment={setUpdateComment}/>
            </ContextState>
        </View>
    )


}

export default ModalComment;