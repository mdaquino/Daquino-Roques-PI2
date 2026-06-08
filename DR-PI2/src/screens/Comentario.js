import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { db, auth } from '../firebase/config';

const Tab = createBottomTabNavigator()

function Comentario(props) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    function Post() {
        db.collection("coments").add({
            postId: props.route.params.params.id,
            owner: auth.currentUser.email,
            descripcion: newComment,
            createdAt: Date.now(),
            likes: []
        })
        comments.push(newComment)
        props.navigation.navigate("Home")
    }
    
    useEffect(() => {
        console.log(props.route.params.params.id);
        db.collection("coments").where("postId", "==", props.route.params.params.id).onSnapshot(
            docs => {
                let comentarios = []
                docs.forEach(doc => {
                    comentarios.push({
                        id: doc.id,
                        comentariosUsus: doc.data()
                    })
                })
                setComments(comentarios)
            }
        )
    }, [])


    
    
    return (
        <View>
            <Text>Comenta: </Text>
            <TextInput 
                keyboardType="default"
                placeholder="Comentario"
                onChangeText={(text) => setNewComment(text)}
                value={newComment}></TextInput>
            <Pressable  onPress={() => Post()}><Text >Enviar comentario</Text></Pressable>
            <FlatList
            data={comments}

            renderItem={({item}) => <Text>{item.comentariosUsus.descripcion}</Text>}
            />
        </View>

    )
}

export default Comentario