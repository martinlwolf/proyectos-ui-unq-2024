import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { addPost } from '../service/Api'
import CustomBTN from './CustomBTN'
import Form from './styles/form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Btnstyle } from './styles/style'


const UserAddPost = () => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [video, setVideo] = useState('')
    const [isError, setIsError] = useState(false) 
    const [errDesc, setErrDesc] = useState('')


    const handleSubmit = () => {
        if (title === '' || description === '' || video === ''){
            setIsError(true)
            setErrDesc('Please fill all the fields')
        } else {
            setIsError(false)
            addPost(title, description, video).then((response) => {
                router.push('/home')
            }).catch((error) => {
                setIsError(true)
                setErrDesc(error.response.data.message)
            })
        }
        
    }

    const handleTitleChange = (title) => {
        setTitle(title)
    }

    const handleDescriptionChange = (description) => {
        setDescription(description)
    }

    const handleVideoChange = (video) => {
        setVideo(video)
    }

  return (
      <View style={Form.view} >
          <Text style={Form.title}>Add new post</Text>
          <View style={Form.container}>

            <Text style={Form.label}>Title</Text>
                <TextInput
                style={Form.input}

                placeholder="title"
                onChangeText={handleTitleChange}
            />

            <Text style={Form.label}>Description</Text>
                <TextInput
                style={Form.input}
                placeholder="description"
                onChangeText={handleDescriptionChange}
            />

            <Text style={Form.label}>Video</Text>
                <TextInput
                style={Form.input}
                placeholder="video"
                onChangeText={handleVideoChange}
            />
            <CustomBTN text='Create post' stylebtn={Btnstyle.primary} onPress={handleSubmit}/>
            {
                isError && <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FE2C55', borderRadius: 20, height: 50}}><Text style={[Form.error, {color: 'white', fontSize: 13}]}>{errDesc}</Text></View>
            }
        </View>
    </View>
  )
}

export default UserAddPost