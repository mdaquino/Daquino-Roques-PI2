import { Text, View, Pressable, Image, FlatList, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { db, auth } from "../firebase/config";
import Post from "../components/Post"


function Home(props) {
    const [comentario, setComentario] = useState("")
    useEffect(() => {
        db.collection("posts").onSnapshot(
            docs => {
                let posteos = []
                docs.forEach(doc => {
                    posteos.push({
                        id: doc.id,
                        posteoUsuario: doc.data()
                    })
                })
                setComentario(posteos)



            }
        )
    }, [])

    
    


    return (
        


        <View style={styles.container}>
            <Text>Pagina de inicio</Text>
            <FlatList
                data={comentario}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Post id={item.id} posteoUsu={item.posteoUsuario} navigation={props.navigation}/>}
            />


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

export default Home
