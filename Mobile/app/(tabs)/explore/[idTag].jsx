import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { getPostByTags } from "../../../service/Api"
import { useLocalSearchParams } from "expo-router";
import TikTokSpinner from "../../../components/TikTokSpinner";
import ErrorScreen from "../../../components/ErrorScreen";
import { FlashList } from "@shopify/flash-list";
import SinglePostVideo from "../../../components/SinglePostVideo";
import useFetchDataEffect from "../../../hooks/useFetchDataEffect";


const Trend = () => {
    const { idTag } = useLocalSearchParams();
    const {isLoading, isError, reloadScreen, dataState} = useFetchDataEffect(() => getPostByTags(idTag), [], [])

    return(
            <View style={{width:'100%', height: '100%'}}>    
                {   isLoading ? <TikTokSpinner/> : 
                            isError ? <ErrorScreen reload={reloadScreen}/> :
                                        <FlashList
                                            data={dataState}
                                            renderItem={({ item }) => {
                                            return <SinglePostVideo post={item}/>
                                        }}
                                            estimatedItemSize={10}
                                            keyExtractor={(item, index) => index.toString()}/>
                }
            </View>
        )

}

export default Trend