import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen 
                name="[id]" 
                options={{ 
                    headerShown: false, 
                }} 
            />
            <Stack.Screen 
                name="comment" 
                options={{ 
                    contentStyle: { backgroundColor: 'rgba(0, 0, 0, 0.3)'},
                    presentation: 'transparentModal', 
                    headerShown: false 
                }} 
            />
        </Stack>
    )
}

export default StackLayout
