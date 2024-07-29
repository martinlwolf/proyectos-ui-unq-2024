import { useLocalSearchParams } from "expo-router"
import SinglePostVideo from "../../components/SinglePostVideo"
import useFetchDataEffect from "../../hooks/useFetchDataEffect"
import { getPostById } from "../../service/Api";
import TikTokSpinner from "../../components/TikTokSpinner";
import ErrorScreen from "../../components/ErrorScreen";
import { View } from "react-native";

const SinglePost = () => {

    const { id } = useLocalSearchParams();
    const { isLoading, isError, dataState, reloadScreen } = useFetchDataEffect(() => getPostById(id), {}, [])
     

    return (
        <View style={{flex:1}}>
            {
                isLoading ? <TikTokSpinner/> :
                            isError ? <ErrorScreen reload={reloadScreen}/> :
                                      <SinglePostVideo post={dataState}/>
            }
        </View>
    )
}

export default SinglePost