import { useLocalSearchParams, useRouter } from "expo-router";
import {  View } from "react-native";
import SinglePostVideo from "../../../components/SinglePostVideo";
import { getPostById } from "../../../service/Api";
import useFetchDataEffect from "../../../hooks/useFetchDataEffect";
import ErrorScreen from "../../../components/ErrorScreen";
import TikTokSpinner from "../../../components/TikTokSpinner";


const PostId = () => {

    const { idPost } = useLocalSearchParams();
    const { isLoading, dataState, reloadScreen, isError } = useFetchDataEffect(() => getPostById(idPost), {}, [])
    

    return (
        <View>
          {isLoading ? <TikTokSpinner /> :
              isError ? <ErrorScreen reload={reloadScreen} /> :
          <SinglePostVideo post={dataState} />}
        </View>
  )
}

export default PostId;
