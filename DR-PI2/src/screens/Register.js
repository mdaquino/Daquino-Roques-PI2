import { useState } from "react"
import { Text, View, Pressable, Image, FlatList, StyleSheet, TextInput } from "react-native"
import { auth, db} from "../firebase/config"
import Login from "./Login"

function Register(props) {

    const [email, setEmail] = useState("")
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)
    const [registerError, setRegisterError] = useState("")
    

    function onSubmit(email, userName, password) {
        auth.createUserWithEmailAndPassword(email, password)
        .then(response => {
            db.collection("users").add({
                email: email,
                nombreUsuario: userName,
                createdAt: Date.now()
            })
        
        })
        .then(response=>{
            props.navigation.navigate("Login")
        })
        .catch(error => {
            setRegisterError("Fallo en el registro")
            console.log(error)
        })

        
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Text>Formulario Registro</Text>
                <Text style={styles.texto}>Ingrese su Email</Text>
                <TextInput style={styles.inputStyle}
                 keyboardType="email-address"
                    placeholder="email"
                    onChangeText={text => setEmail(text)}
                    value={email}></TextInput>
                <Text style={styles.texto}>Ingrese su Username</Text>
                <TextInput style={styles.inputStyle}
                 keyboardType="default"
                    placeholder="Nombre de usuario"
                    onChangeText={text => setUsername(text)}
                    value={userName}></TextInput>
                <Text style={styles.texto}>Ingrese su Password</Text>
                <TextInput style={styles.inputStyle}
                 keyboardType="default"
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}></TextInput>
                <Pressable style={styles.clickeableForm} onPress={() => onSubmit(email,userName, password)}><Text style={styles.textoBoton}>Registrarse</Text></Pressable>
            </View>
            <Text>Ya tenes cuenta?</Text>
            <Pressable style={styles.clickeable} onPress={() => props.navigation.navigate("Login")}><Text style={styles.texto}>Ir al Login</Text></Pressable>
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
    },
     containerForm: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    inputStyle: {
        height: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderStyle: "solid",
        borderRadius: 6,
        marginVertical: 10
    },
    clickeableForm: {
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745"
    },
    textoBoton: {
        color: "#fff"
    }
})

export default Register