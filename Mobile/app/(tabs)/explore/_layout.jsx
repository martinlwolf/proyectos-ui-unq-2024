import { Stack } from "expo-router"

const StackLayout = () => {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="[idTag]" options={({route}) => ({
                headerShown: true,
                headerTitle: route.params.idTag
            })}/>
        </Stack>
    )
}

export default StackLayout