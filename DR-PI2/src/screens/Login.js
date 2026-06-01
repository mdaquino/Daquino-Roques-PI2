import { Text, View, Pressable, Image, FlatList, StyleSheet, TextInput } from "react-native"
import { useState } from "react"
import { auth } from '../firebase/config'


function Login(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function onSubmit() {
        console.log(email)
        console.log(password)
        auth.signInWithEmailAndPassword(email, password)
    }
    return (
        <View style={styles.container}>
            <Text>Formulario de Login</Text>
            <Text>No tenes cuenta?</Text>
            <Pressable style={styles.clickeable} onPress={() => props.navigation.navigate("Register")}><Text style={styles.texto}>Ir al registro</Text></Pressable>
            <br></br>
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
            <Pressable style={styles.clickeable} onPress={() => onSubmit()}>
                <Text> Login </Text>
            </Pressable>
            
            <Pressable style={styles.clickeable} onPress={() => props.navigation.navigate("HomeMenu")}><Text style={styles.texto}>Ir al Menu</Text></Pressable>
            
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

export default Login