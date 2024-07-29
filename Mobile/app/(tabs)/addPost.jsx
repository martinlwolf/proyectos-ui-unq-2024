import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import UserAddPost from "../../components/UserAddPost";
import { useEffect, useState } from "react";
import TikTokSpinner from "../../components/TikTokSpinner";


const AddPost = () => {

    const [token, setToken] = useState("")
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        AsyncStorage.getItem('token').then((data) => {
            setToken(data)
            setLoading(false)
        });
    },[])


    return(
        <SafeAreaView>
            {loading ? <TikTokSpinner/> : token ? <UserAddPost/> : <Redirect href={"/login"} />} 
        </SafeAreaView>)
} 

export default AddPost 