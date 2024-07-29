import React, { useContext, useEffect, useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { StyleSheet, Dimensions, Text, View, Pressable } from 'react-native';
import CommentBox from './CommentBox';
import { useRouter } from 'expo-router';
import { MultiStateContext } from './context/ContextState';

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

const { width, height } = Dimensions.get('screen');

export default function CommentScroll({post, setUpdateComment}) {
    const router = useRouter();
    const [canClose, setCanClose] = useState(true);
    const translationY = useSharedValue(0);
    const prevTranslationY = useSharedValue(0);
    const {touchComment} = useContext(MultiStateContext)
    useEffect(() => {
      setUpdateComment(touchComment)
    }, [touchComment])

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: translationY.value },
    ],
  }));

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationY.value = translationY.value;
    })
    .onUpdate((event) => {
      const maxTranslateY = height ;
      const VALUE_TRANSLATION_Y = prevTranslationY.value + event.translationY;
      if (VALUE_TRANSLATION_Y < maxTranslateY) {
        setCanClose(false);
        translationY.value = clamp(
          VALUE_TRANSLATION_Y,
        0,
        maxTranslateY)
      } else {
        setCanClose(true);
      }
    })
    .onEnd(() => {
      const maxTranslateY = height ;
      if (translationY.value > maxTranslateY / 6) {
        translationY.value = withTiming(maxTranslateY, { duration: 400 });
        setTimeout(() => {
          router.back()
          translationY.value = 0;
        }, 400);
      } else {
        translationY.value = withTiming(0, { duration: 300 });
      }
      if (canClose){
        translationY.value = 0;
        router.back()
      } 
    })
    .runOnJS(true);

  return (
    <GestureHandlerRootView>
        <Animated.View style={[animatedStyles, {flex: 1}]}>
            <View style={{flex: 1}}/>
            <View style={[styles.base]}>
                <GestureDetector gesture={pan}>

                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.text}>{post.comments.length} comments</Text>
                    <Pressable style={styles.btnHeader} onPress={() => {
                      router.back()
                      translationY.value = 0;
                      }}>
                      <Text style={{fontWeight: 'bold', fontSize:20}}>x</Text>
                    </Pressable>
                  </View>
                    
                </GestureDetector>
                <CommentBox post={post}/>
            </View>
        </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  base: {
    backgroundColor: 'white', 
    alignItems: 'center', 
    padding: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 3
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#5D5D5D',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnHeader: {
    width: 'auto', 
    height: 'auto', 
    alignItems: 'center', 
    justifyContent: 'center',
    left: 100
  }
});
