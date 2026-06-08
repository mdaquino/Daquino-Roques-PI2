import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Comentario from "../screens/Comentario";

const Stack= createNativeStackNavigator()

function NavegacionStack(props){

    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={Home}  />
            <Stack.Screen name="Comentario" component={Comentario}/>
         </Stack.Navigator>
    )
}

export default NavegacionStack