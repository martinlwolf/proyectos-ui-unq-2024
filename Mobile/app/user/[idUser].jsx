import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import ViewProfile from "../../components/ViewProfile";
import { getUserById } from "../../service/Api";
import useFetchDataEffect from "../../hooks/useFetchDataEffect";
import ErrorScreen from "../../components/ErrorScreen";
import TikTokSpinner from "../../components/TikTokSpinner";




const UserId = () => {

    const { idUser } = useLocalSearchParams();
    const router = useRouter();
    const [ user,setUser ] = useState({});
    const [token,setToken] = useState("");

    const {isLoading,dataState, isError,reloadScreen } = useFetchDataEffect(()=>getUserById(idUser),{},[])

  return (
        <View>
        {
           isLoading ? <TikTokSpinner/> :
           isError ? <ErrorScreen reload={reloadScreen}/> : <ViewProfile user={dataState} setToken={setToken}/>
        }       
        </View>
  )
}

export default UserId;
