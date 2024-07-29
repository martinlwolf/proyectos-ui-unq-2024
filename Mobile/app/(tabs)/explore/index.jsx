import { useRouter } from "expo-router"
import { Button, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomBTN from "../../../components/CustomBTN"
import { Btnstyle } from "../../../components/styles/style"
import useFetchDataEffect from "../../../hooks/useFetchDataEffect"
import { getTags } from "../../../service/Api"
import TikTokSpinner from "../../../components/TikTokSpinner"

const Index = () => {
    const route = useRouter()
    const {isLoading, dataState} = useFetchDataEffect(getTags, [], [])

    const handlerGoTag = (tag) => {
        
        route.push(`/explore/${tag.replace('#', '')}`)
        console.log(tag)
    }

    return(
        <SafeAreaView style={[style.pdtop]}>
            <Text style={[style.title]}>Trends</Text>
            <View style={[style.mgtop]}>
                {
                    isLoading ? <TikTokSpinner/> : 
                    dataState.map((tag, index) => {
                        return <CustomBTN key={index} text={tag} stylebtn={Btnstyle.outlineSecondary} onPress={() => handlerGoTag(tag)}/>
                    })
                }
            </View>
        </SafeAreaView>)
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }, 
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: 'center'
    },
    mgtop: {
        marginTop: 34,
        height: '90%',
        justifyContent: 'space-between',
    },
    pdtop: {
        padding: 16
    },
    gapls: {
        marginTop: 10
    }, 
    btnSecondayOutline: {
        backgroundColor: '#3AC433',
    }

})

export default Index 