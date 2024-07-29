import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false, presentation: 'transparentModal' }}>
            <Stack.Screen 
                name="modalComment" 
                options={{ 
                    presentation: 'transparentModal', 
                    headerShown: false,
                    contentStyle: { backgroundColor: 'rgba(0, 0, 0, 0.3)'}, 
                }} 
            />
        </Stack>
    )
}

export default StackLayout
