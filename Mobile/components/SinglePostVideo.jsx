import * as React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, StatusBar, Dimensions } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import InformationPost from './InformationPost';
import { useState } from 'react';
import { useContext } from 'react';
import { MultiStateContext } from './context/ContextState';
import { useEffect } from 'react';

const HEIGHT_WINDOW = Dimensions.get('window').height;
const HEIGHT_BAR = StatusBar.currentHeight
const HEIGHT_BAR_RESULT = HEIGHT_WINDOW >=940 ? HEIGHT_BAR*3 : HEIGHT_BAR
const HEIGHT_RESULT = HEIGHT_WINDOW - HEIGHT_BAR_RESULT

const SinglePostVideo = ({post, updateLike, updateComment}) => {
  
  const video = React.useRef(null);
  const [status, setStatus] = useState({});


  const handleVideoPress = () => {
    if (status.isPlaying) {
      video.current.pauseAsync();
    } else {
      video.current.playAsync();
    }
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleVideoPress}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: post.video
          }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
      </TouchableWithoutFeedback>
      <InformationPost post={post}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: HEIGHT_RESULT,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#343434',
  },
  video: {
    alignSelf: 'center',
    width: "100%",
    height: "100%",
  }
});

export default SinglePostVideo;