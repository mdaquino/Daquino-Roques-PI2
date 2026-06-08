import { useEffect, useState } from "react"
import { db, auth } from "../firebase/config"
import { View, Text, Pressable } from "react-native"
import firebase from "firebase"

function Post(props) {
    const [cantLike, setCantLike] = useState(0)
    const [likeado, setLikeado] = useState(false)

    useEffect(() => {
        const likesArray = props.posteoUsu.likes || []
        setCantLike(likesArray.length)
        if (auth.currentUser !== null && likesArray.includes(auth.currentUser.email)) {
            setLikeado(true)
        } else {
            setLikeado(false)
        }
    }, [props.posteoUsu])

    function Like() {
        if (auth.currentUser === null){
            alert("tenes que iniciar sesion para likear")
            return
        }
        db.collection("posts")
            .doc(props.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
            })
            .then(() => {
                setCantLike(cantLike + 1)
                setLikeado(true)
            })
    }
    function DisLike() {
        if (auth.currentUser === null){
            alert("tenes que iniciar sesion para likear")
            return
        }
        db.collection("posts")
            .doc(props.id)
            .update({
                likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
            })
            .then(() => {
                setCantLike(cantLike - 1)
                setLikeado(false)
            })
    }

    return (
        <View>
            <Text>{props.posteoUsu.descripcionPost}</Text>
            <Text>Hecho por: {props.posteoUsu.owner}</Text>
            {
                likeado === true ?
                <Pressable onPress={() => DisLike()}><Text>Quitar Like</Text></Pressable>
                    
                :
                <Pressable onPress={() => Like()}><Text>Like</Text></Pressable>
            }
            <Text>Cant. Likes: {cantLike}</Text>
        </View>
    )


}

export default Post