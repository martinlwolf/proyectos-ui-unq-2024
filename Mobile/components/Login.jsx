import { useRouter } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { postLogin } from '../service/Api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Form from './styles/form'
import CustomBTN from './CustomBTN'
import { Btnstyle } from './styles/style'


const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isError, setIsError] = useState(false) 
    const [errDesc, setErrDesc] = useState('')



    const handleSubmit = () => {

        if (username === '' || password === ''){
            setIsError(true)
            setErrDesc('Please fill all the fields')
        } else {
            postLogin(username, password).then((response) => {
                const id = response.data.id;
                const token = response.headers['authorization'];
                const img = response.data.image;
                Promise.all([AsyncStorage.setItem('id', id), AsyncStorage.setItem('img', img)]).then(() => {
                    router.push('/profile');
                })
                AsyncStorage.setItem('token', token)
            }).catch((error) => {
                setIsError(true)
                setErrDesc(error.response.data.message)
            })
        }
        
    }
    
    const handlePasswordChange = (text) => {
        setPassword(text)
    }

    const handleUsernameChange = (text) => {
        setUsername(text)
    }

  return (
      <View style={Form.view} >
          <Text style={Form.title}>Login</Text>
          <View style={Form.container}>

            <Text style={Form.label}>Username</Text>
            <TextInput
            style={Form.input}
            placeholder="username"
            onChangeText={handleUsernameChange}
            />

              <Text style={Form.label}>Password</Text>
            <TextInput
            style={Form.input}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={handlePasswordChange}
            />                                  
            
            <CustomBTN text='Login' stylebtn={Btnstyle.primary} onPress={handleSubmit}/>

            <TouchableOpacity onPress={() => { router.push("/login/register") }}>
                  <Text style={styles.buttonRegister}>Register</Text>
            </TouchableOpacity>
            {
                isError && <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FE2C55', borderRadius: 20, height: 50}}><Text style={[Form.error, {color: 'white', fontSize: 13}]}>{errDesc}</Text></View>
            }
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    buttonRegister: {
        color: '#FE2C55',
        fontSize: 16,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
}); 

export default Login