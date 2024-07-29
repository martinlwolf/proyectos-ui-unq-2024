import { useRouter } from 'expo-router'
import { useState } from 'react'
import { TextInput, View, Text } from 'react-native'
import Form from './styles/form'
import CustomBTN from './CustomBTN'
import { postRegister } from '../service/Api'
import { Btnstyle } from './styles/style'

const Register = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [isError, setIsError] = useState(false) 
    const [errDesc, setErrDesc] = useState('')
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/


    const handleSubmit = () => {
        
        if (username === '' || password === '' || email === '' || image === ''){
            setIsError(true)
            setErrDesc('Please fill all the fields')
        } else if( !emailRegex.test(email) ) {
            setIsError(true)
            setErrDesc('Please enter a valid email')
        } else {
            postRegister(username,password,email,image).then(()=>{
                router.push("/login")
            }).catch((error)=>{
                setIsError(true)
                setErrDesc(error.response.data.message)

            })
        }
    }

    const handleUsernameChange = (text) => {
        
        setUsername(text)
    }

    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleEmailChange = (text) => {
        
        setEmail(text)
    }

    const handleImageChange = (text) => {
        
        setImage(text)
    }

  return (
        <View style={Form.view}>
            <Text style ={Form.title}>Register</Text>
            <View style={Form.container}>
                <Text style={Form.label}>Username</Text>
                <TextInput
                    style={Form.input}
                    placeholder='username'
                    onChangeText={handleUsernameChange}
                />
                <Text style={Form.label}>Password</Text>
                <TextInput
                    style={Form.input}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={handlePasswordChange}
                />
                <Text style={Form.label}>Email</Text>
                <TextInput
                    style={Form.input}
                    placeholder='email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCompleteType='email'
                    textContentType='emailAddress'
                    onChangeText={handleEmailChange}
                />
                <Text style={Form.label}>Image</Text>
                <TextInput
                    style={Form.input}
                    placeholder='image'
                    onChangeText={handleImageChange}
                />

                <CustomBTN text='Register' stylebtn={Btnstyle.primary} onPress={handleSubmit}/>
                {
                    isError && <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FE2C55', borderRadius: 20, height: 50}}><Text style={[Form.error, {color: 'white', fontSize: 13}]}>{errDesc}</Text></View>
                }
            </View>
        </View>
  )
}

export default Register
