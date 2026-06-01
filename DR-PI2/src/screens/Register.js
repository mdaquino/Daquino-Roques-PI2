import { useState } from "react"
import { Text, View, Pressable, Image, FlatList, StyleSheet, TextInput } from "react-native"
import { auth } from '../firebase/config'

function Register(props) {
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit(){
        console.log(email)
        console.log(password)
        console.log(user)
        auth.createUserWithEmailAndPassword(email, password)
    }
    
    

    return (
        <View style={styles.container}>
            <Text>Formulario Registro</Text>
            <Text>Ya tenes cuenta?</Text>
            <Pressable style={styles.clickeable} onPress={() => props.navigation.navigate("Login")}><Text style={styles.texto}>Ir al Login</Text></Pressable>
            <TextInput style={styles.field}
                keyboardType='email-address'
                placeholder='email: '
                onChangeText={text => setEmail(text)}
                value={email} />
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='password: '
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password} />
            <TextInput style={styles.field}
                keyboardType='default'
                placeholder='user}: '
                onChangeText={text => setUser(text)}
                value={user} />
            <Pressable style={styles.clickeable} onPress={() => onSubmit()}>
                <Text> Registrarse </Text>
            </Pressable>
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
        textAlign: "center"
    }
})

export default Register