import { Pressable, StyleSheet, Text, View } from "react-native";
import RoundBTN from "./RoundBTN";
import { useRouter } from "expo-router";

import { Comment, Heart, Share } from "../assets/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { putAddOrRemoveLike } from "../service/Api";
import { useContext, useState } from "react";
import { MultiStateContext } from "./context/ContextState";



const InformationPost = ({ post }) => {

    const [isLiked, setIsLiked] = useState(false)
    AsyncStorage.getItem('id').then((id) => {
        setIsLiked(post.likes.some(user => user.id === id))
    })
    const [cantLikes, setCantLikes] = useState(post.likes.length)
    const [liked, setLiked] = useState(isLiked)

    const [isLogged, setIsLogged] = useState(false)
    AsyncStorage.getItem('token').then((data) => {
        setIsLogged(data)
    })

    const router = useRouter()

    const handlerGoProfile = () => {
        router.push(`/user/${post.user.id}`)
    }

    const handlerGoLogin = () => {
        router.push('/login') 
    }

    const handlerLike = () => {
        
          putAddOrRemoveLike(post.id).then((postnew) => {
            AsyncStorage.getItem('id').then((id) => {
                setLiked(postnew.data.likes.some(user => user.id === id))
            })
          })
          liked ? setCantLikes(cantLikes - 1) : setCantLikes(cantLikes + 1)
        
      }

    const handlerGoComment = () => {
        router.push({
            pathname: '/post/comment/modalComment', 
            params: {
                post: JSON.stringify(post)
            }
        })
    }

    return (
        <View style={styles.contentStyle}>
            <View style={{flex:1, maxHeight: 139, justifyContent: 'flex-end'}}>
                <Pressable onPress={isLogged ? handlerGoProfile : handlerGoLogin}>
                    <Text style={[styles.textwhite, {marginBottom: 10}]}>{post.user.username}</Text>
                </Pressable>
                <View>
                    <Text style={styles.textwhite} numberOfLines={2}>{post.title}</Text>
                </View>
                <View>
                    <Text style={styles.textwhite} numberOfLines={2}>{post.description}</Text>
                </View>
            </View>
            <View style={{gap:15}}>
                <View style={styles.boton}>
                    <RoundBTN onPress={isLogged ? handlerLike : handlerGoLogin}>
                        <Heart isLiked={liked}/>
                    </RoundBTN>
                    <Text style={styles.textBTN}>{cantLikes}</Text>
                </View>
                
                <View style={styles.boton}>
                    <RoundBTN onPress={isLogged ? handlerGoComment : handlerGoLogin}>
                        <Comment />
                    </RoundBTN>
                    <Text style={styles.textBTN}>{post.comments.length}</Text>
                </View>
                
                <View style={styles.boton}>
                    <RoundBTN >
                        <Share />
                    </RoundBTN>
                </View>
            </View>
        </View>
    )
}

export default InformationPost;


const styles = StyleSheet.create({
    contentStyle: {
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    textwhite: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold'
    },
    boton:{
        alignItems:'center'
    },
    textBTN:{
        color:'white',
        fontWeight:'bold'
    }
  });