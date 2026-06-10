import { Text, View, Pressable, Image, FlatList, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import PostNuevo from "../screens/PostNuevo";
import NavegacionStack from "./NavegacionStack";


const Tab = createBottomTabNavigator()

function HomeMenu(props){


    return(
        <Tab.Navigator>
            <Tab.Screen name="Inicio" component={NavegacionStack} options={{tabBarIcon: () => <AntDesign name="home" size={24} color="black" />}}/>
            <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => <AntDesign name="profile" size={24} color="black" />}}/>
            <Tab.Screen name="Posts" component={PostNuevo}/>
        </Tab.Navigator>
    )
}

export default HomeMenu