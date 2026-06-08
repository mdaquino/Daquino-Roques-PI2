import { Text, View, Pressable, Image, FlatList, StyleSheet } from "react-native"
import Login from "./Login"
import PostNuevo from "./PostNuevo"
import { auth, db } from "../firebase/config"
import { useState } from "react"
import Post from "../components/Post"
import { useEffect } from "react"

function Profile(props) {

    function Logout(){
        auth.signOut()
        props.navigation.navigate("Login")
    }
    const [posts, setPosts]= useState("")
     useEffect(() => {
        db.collection("posts").where("owner", "==", auth.currentUser.email).onSnapshot(
        docs=>{
            let posteos= []
            docs.forEach(doc=>{
                posteos.push({
                    id: doc.id,
                    posteoDeUsuario: doc.data()
                })
            })
            setPosts(posteos)
        }
     )

     },[])

    return (
        <View style={styles.container}>
            <Text>Pagina de Perfil</Text>
            <Text>Mis posteos:</Text>
            <FlatList
             data={posts}
             keyExtractor={item => item.id.toString()}
             renderItem={({item}) => <Post id={item.id} posteoUsu={item.posteoDeUsuario} />}
            />
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