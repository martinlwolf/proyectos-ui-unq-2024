import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as VideoThumbnail from 'expo-video-thumbnails'
import { useRouter } from 'expo-router'

const PostThumbnail = ({ post }) => {
  const router = useRouter()
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        const { uri } = await VideoThumbnail.getThumbnailAsync(
          post.video,
          {
            time: 0, 
          }
        );
        setThumbnail(uri);
      } catch (e) {
       
      }
    }; 
    generateThumbnail();
  }, []);

  return (
    
    <View >
      {/*  */}
      {thumbnail? 
        <TouchableOpacity onPress={() => router.push(`/search/${post.id}`)}>
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        </TouchableOpacity>
      :
        <TouchableOpacity style={[styles.placeholder]} onPress={() => { router.push(`/search/${post.id}`) }}>
        </TouchableOpacity> 
      }
    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
    width: '100%',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    backgroundColor: '#D9D9D9',
    borderColor: '#B0B0B4',
    borderWidth: 0.5,
    height: 250,
    width: '100%',
  }
}); 

export default PostThumbnail