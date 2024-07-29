import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name="login" />
            <Stack.Screen 
                name="post" 
                options={{
                    contentStyle: {backgroundColor: 'rgba(0, 0, 0, 0.2)'},
                    presentation: 'transparentModal',
                    headerShown: false
                }}
            />
            
        </Stack>
    )
}

export default StackLayout