import { useRouter } from 'expo-router'
import { Pressable } from 'react-native'
import { Image } from 'react-native'
const UserBTN = ({ id, image }) => {
    const router = useRouter()

    return (
        <Pressable onPress={()=> {router.push(`/user/${id}`)}}>
            <Image  style={{ width: 56, height: 56, borderRadius: 20 }}
                    source={{ uri: image }}/>
        </Pressable>
    )
}

export default UserBTN