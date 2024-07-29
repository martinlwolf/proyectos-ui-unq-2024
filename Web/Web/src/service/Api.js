import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

export const postLogin = (username, password) => { 

    const res = axios.post('/login', { username, password })
        .then((response) => {
            return response
        });
    return res
}

export const postRegister = (username, password, email, image) => { 

    return axios.post('/register', { username, password, email, image })

}

export const getUser = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    const data = axios.get('/user').then(({ data }) => {
            return data
    });

    return data;
}

export const getFriends = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    const friendsResult = axios.get('/user').then(({ data }) => {
        return {followings: data.following , followers: data.followers} ;
    });
    return friendsResult
}

export const followUser = (userId) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    return axios.put(`/user/${userId}/follow`);
}


export const getSearch = () => {
    const search = localStorage.getItem('search')
    const searchResult = axios.get(`/search/?search=${search}`).then(({data}) => {
            return data
        });
    return searchResult
}

export const getTags = () => {
    const tagResult = axios.get(`/trends`).then(({data}) => {
            return data
        });
    return tagResult
}

export const getPostByTags = (name) => {
    const tag = name.replace('#', '')
    const posts = axios.get(`/trends/${tag}`).then(({data}) => {
            return data
        });
    return posts
}

export const getUserById = (id) => {
    const userById = axios.get(`/user/${id}`).then(({data}) => {
            return data
        });
    return userById
}

export const getPostById = (id) => {
    const postById = axios.get(`/post/${id}`).then(({data}) => {
            return data
        });
    return postById
 }

export const putAddOrRemoveLike = (postId) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    return axios.put(`/post/${postId}/like`);
}

export const addPost = (title, description, video) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    return axios.post(`/post`, {title, description, video})
}

export const getLatestPosts = () => {

    return axios.get(`/latestPosts`)
}


export const getTimeLine = () => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    return axios.get("/user/timeline")
}


export const putEditPost = (id,title, description, video) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    return axios.put(`/post/${id}`,{title, description, video})
}

export const postComment = (id, text)=>{
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

    return axios.post(`/post/${id}/comment`, {text})

}

