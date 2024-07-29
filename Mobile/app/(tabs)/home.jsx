import { View } from "react-native"
import SinglePostVideo from "../../components/SinglePostVideo"
import { FlashList } from "@shopify/flash-list"
import { getLatestPosts } from "../../service/Api"
import TikTokSpinner from "../../components/TikTokSpinner"
import ErrorScreen from "../../components/ErrorScreen"
import useFetchDataEffect from "../../hooks/useFetchDataEffect"
import { useContext, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ContextState, MultiStateContext } from "../../components/context/ContextState"

const Home = () => {

    const [updateComment, setUpdateComment] = useState(false)
    const [updateLike, setUpdateLike] = useState(false)

    const {isLoading, isError, reloadScreen, dataState} = useFetchDataEffect(getLatestPosts, [], [updateLike, updateComment])

    return(
            <View style={{width:'100%', height: '100%'}}>    
                <ContextState>
                {   isLoading ? <TikTokSpinner/> : 
                            isError ? <ErrorScreen reload={reloadScreen}/> :
                                        <FlashList
                                            data={dataState}
                                            renderItem={({ item }) => {
                                            return <SinglePostVideo post={item} updateLike={setUpdateLike} updateComment={setUpdateComment}/>
                                        }}
                                            estimatedItemSize={10}
                                            keyExtractor={(item, index) => index.toString()}/>
                }
                </ContextState>
            </View>
        )

}

export default Home 