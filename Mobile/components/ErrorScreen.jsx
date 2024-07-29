import { Text, View } from 'react-native'
import CustomBTN from './CustomBTN'
import { Btnstyle } from './styles/style'

const ErrorScreen = ({reload}) => {

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
            <Text style={{fontSize: 25, fontWeight: 'bold', padding: 15, textAlign:'center'}}> Oops an error occurred, please reload the page </Text>
            <CustomBTN text={'reload'} stylebtn={Btnstyle.primary} onPress={reload}/>
        </View>
    )

}

export default ErrorScreen