import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomBTN from './CustomBTN';
import { Btnstyle } from './styles/style';
import UserBTN from './UserBTN';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { followUser } from '../service/Api';



const UserProfile = ({ id,username,followers,following,image,setToken }) => {
    const router = useRouter()
    const [ idUserProfile,setIdUserProfile ] = useState(""); 
    const FOLLOWERS = []

    const idFollowers = followers.map(({ id })=>{ return FOLLOWERS.push(id) })


    const [isFollow, setIsFollow] = useState(idFollowers.includes(id))

    const handleSubmit = () => {
        AsyncStorage.removeItem('token').then(()=>{
            router.push('/home')
            setToken("")
        })
        AsyncStorage.getItem('token').then((res)=>{
        })
    };
    
    const handlerFollowUnfollow = () => {
        followUser(id)
        setIsFollow(!isFollow)
    }




    AsyncStorage.getItem("id").then((res)=>{
        setIdUserProfile(res)
    })

    return (
        <View style={styles.innerContainer}>
            <View style={styles.userInfoContainer}>
                <UserBTN id={id} image={image}/>
                <Text style={styles.userAccount}>{username}</Text>
            </View>
           {
                id == idUserProfile ? <CustomBTN text='Log out' stylebtn={Btnstyle.secondary} onPress={handleSubmit}/> :
                            isFollow ? <CustomBTN text='unfollow' stylebtn={Btnstyle.primary} onPress={handlerFollowUnfollow}/> :
                                                     <CustomBTN text='follow' stylebtn={Btnstyle.secondary} onPress={handlerFollowUnfollow}/>
            }
           <View style={styles.followContainer}>
               <Text style={styles.followText}>{following.length} Follow</Text>
               <Text style={styles.followText}>{followers.length} Followers</Text>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 200,
        padding: 4,
        backgroundColor: 'white',
        textAlign: 'center',
        marginTop: 40, 
        borderRadius:12,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    userAccount: {
        textAlign: 'center',
        marginLeft:16,
        fontSize: 20,
        fontWeight: 'bold'
    },
    followContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
       
    },
    followText: {
        textAlign: 'center',
        marginHorizontal: 8,
        fontSize:20,
    },
});

export default UserProfile;