import { Text, View, Pressable, Image, FlatList, StyleSheet } from "react-native"
import Login from "../Login/Login"
import { auth, db } from "../firebase/config"

function Profile(props) {

    function Logout(){
        auth.signOut()
        props.navigation.navigate("Login")
    }

    return (
        <View style={styles.container}>
            <Text>Pagina de Perfil</Text>
            <Pressable onPress={() => Logout()} style={styles.clickeable}><Text style={styles.texto}>Ir al Login</Text></Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
            display: "flex",
            padding: 10,
            flex: 1,
            width: "100%",
            
            flexWrap: "wrap",
            textAlign: "center"
        },
     clickeable: {
            padding: 4,
            backgroundColor: "#3048ce",
            marginBottom: 10,
            borderRadius: 4,
            textAlign: "center"
        },
        texto: {
            fontWeight: "bold",
            textAlign:"center"
        }
})

export default Profile