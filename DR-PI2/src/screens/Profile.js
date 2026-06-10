import { Text, View, Pressable, Image, FlatList, StyleSheet, ActivityIndicator } from "react-native"
import Login from "./Login"
import PostNuevo from "./PostNuevo"
import { auth, db } from "../firebase/config"
import { useState } from "react"
import Post from "../components/Post"
import { useEffect } from "react"

function Profile(props) {
     const [users, setUsers] = useState([])
    useEffect(() => {db.collection("users").where("email","==",auth.currentUser.email).onSnapshot(
        docs =>{
            let usuarios = []
            docs.forEach( doc => {
                usuarios.push({
                    id: doc.id,
                    nombreDeUsuario: doc.data()
                })
            })
            setUsers(usuarios)
            
        }
        
    )}, [])

    function Logout() {
        auth.signOut()
        props.navigation.navigate("Login")
    }
    const [posts, setPosts] = useState("")
    useEffect(() => {
        db.collection("posts").where("owner", "==", auth.currentUser.email).onSnapshot(
            docs => {
                let posteos = []
                docs.forEach(doc => {
                    posteos.push({
                        id: doc.id,
                        posteoDeUsuario: doc.data()
                    })
                })
                setPosts(posteos)
            }
        )

    }, [])
    

    

    return (
        <View style={styles.container}>
            <Text>Mi Perfil</Text>
            <Text>Nombre de usuario: {users[0] ? users[0].nombreDeUsuario.nombreUsuario : <ActivityIndicator size="small" color="green"/>  }</Text>
            <Text>Email de usuario: {users[0] ? users[0].nombreDeUsuario.email : <ActivityIndicator size="small" color="green"/>  }</Text>
            <Text>Mis posteos:</Text>
            <FlatList
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Post id={item.id} posteoUsu={item.posteoDeUsuario} />}
            />
            <Pressable onPress={() => Logout()} style={styles.clickeable}><Text style={styles.texto}>Cerrar sesión</Text></Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        flex: 1,
       width: "100%"
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
        textAlign: "center"
    }
})

export default Profile