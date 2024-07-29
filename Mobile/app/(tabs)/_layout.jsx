import { Tabs } from "expo-router"
import { AddPostIcon, ExploreIcon, HomeIcon, ProfileIcon, SearchIcon } from "../../assets/icons"

const TabLayout = () => {
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen 
            name="home" 
            options={{
                tabBarIcon: ({ focused, size }) => (
                    <HomeIcon focused={focused} size={size} />
                ), tabBarShowLabel: false,
            }} />
            <Tabs.Screen 
            name="explore"
            options={{
                tabBarIcon: ({ focused, size }) => (
                    <ExploreIcon focused={focused} size={size} />
                ),
                tabBarShowLabel: false,
            }}/>
            <Tabs.Screen name="addPost"
            options={{
                tabBarIcon: ({ focused, size }) => (
                    <AddPostIcon focused={focused}size={size} />
                ), tabBarShowLabel: false,
            }}/>
            <Tabs.Screen name="search"
            options={{
                tabBarIcon: ({ focused, size }) => (
                    <SearchIcon focused={focused} size={size} />
                ), tabBarShowLabel: false,
            }}
            />

            <Tabs.Screen name="profile"
            options={{
                tabBarIcon: ({ focused,size }) => (
                    <ProfileIcon focused={focused} size={size} />
                ), tabBarShowLabel: false,
            }}/>
        </Tabs>
    )
}

export default TabLayout