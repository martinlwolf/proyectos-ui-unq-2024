import React from 'react'
import UserProfile from './UserProfile'
import { StyleSheet,View,Text, ScrollView } from 'react-native';

import PostThumbnail from './PostThumbnail';


const ViewProfile = ({ user, setToken }) => {

  


  return (
    <View style={styles.base}>
        <View style={[styles.container]}>
            <UserProfile id={user.id} username={user.username} followers={user.followers } following={user.following} image={user.image} setToken={setToken}/>
        </View>
          <View style={styles.line}></View>
          <View style={styles.containerViewPost}>
          <ScrollView style={{height:'100%'}}>
              <View style={styles.conteinerPost}>
                  {
                    user.posts.length > 0 ? user.posts.map((post) => (
                    <View key={post.id} style={styles.item}>
                      <PostThumbnail post={post}/>
                    </View>
                    ))
                    :
                    <Text style={styles.text}>You haven't Post </Text>
                    }
              </View>
          </ScrollView>
          </View>
      </View>
  )
}

  const styles = StyleSheet.create({
    base:{
      height:"100%",
      alignItems:"center",
    },
    container: {
      width:"100%",
      padding:27,
      alignItems:"center",      
    },
    containerViewPost:{
      height:'100%',
      backgroundColor:'#FFFFFF',
      gap:20
    },
    line: {
      borderTopWidth:1,
      borderColor:"#F1F1F2",
      width:"77%"
    },
    conteinerPost:{
      flex:1,
      justifyContent:'center',
      flexDirection:'row',
      width:'100%',
      flexWrap:'wrap',
  },
    text:{
      textAlign: 'center',
      color: '#AAAAAE',
      fontSize:18,
    },
    item:{
      backgroundColor: '#D9D9D9',
      borderColor:'#B0B0B4',
      borderWidth:0.5,
      height:250,
      width: '30%', 
  },
  });





export default ViewProfile
