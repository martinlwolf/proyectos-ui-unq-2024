import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage"
axios.defaults.baseURL = process.env.EXPO_PUBLIC_API_URL;

export const postLogin = (username, password) => { 

    return axios.post('/login', { username, password })
}

export const postRegister = (username, password, email, image) => { 

    return axios.post('/register', { username, password, email, image })

}

export const getUser = () => {
    return AsyncStorage.getItem('token').then((res)=>{
        axios.defaults.headers.common['Authorization'] = res
        return axios.get('/user')
    });

    
}

export const getFriends = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    const friendsResult = axios.get('/user').then(({ data }) => {
        return {followings: data.following , followers: data.followers} ;
    });
    return friendsResult
} 

export const followUser = (userId) => {
    AsyncStorage.getItem('token').then((res)=>{ 
        axios.defaults.headers.common['Authorization'] = res
        axios.put(`/user/${userId}/follow`);
    });

}


export const getSearch = (search) => {
    return  axios.get(`/search/?search=${search}`)
}


export const getTags = () => {
    return axios.get(`/trends`)
}

export const getPostByTags = (name) => {
    const tag = name.replace('#', '')
    return axios.get(`/trends/${tag}`)
}

export const getUserById = (id) => {
    return axios.get(`/user/${id}`)
}

export const getPostById = (id) => {
    
    return axios.get(`/post/${id}`)
 }

export const putAddOrRemoveLike = (postId) => {
    return AsyncStorage.getItem('token').then((res)=>{ 
        axios.defaults.headers.common['Authorization'] = res
        return axios.put(`/post/${postId}/like`);
    });

}

export const addPost = (title, description, video) => {
    return AsyncStorage.getItem('token').then((res)=>{ 
        axios.defaults.headers.common['Authorization'] = res
        return axios.post(`/post`, {title, description, video})
    })
}


export const getLatestPosts = () => {

    return axios.get(`/latestPosts`)
}


// export const getTimeLine = () => {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
//     return axios.get("/user/timeline")
// }


// export const putEditPost = (id,title, description, video) => {
//     axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
//     return axios.put(`/post/${id}`,{title, description, video})
// }

export const postComment = (id, text)=>{
    return AsyncStorage.getItem('token').then((res)=>{ 
        axios.defaults.headers.common['Authorization'] = res
        return axios.post(`/post/${id}/comment`, {text})
    })
}

