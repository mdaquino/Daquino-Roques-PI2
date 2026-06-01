import { Text, View, Pressable, Image, FlatList, StyleSheet } from "react-native"

function Home() {
    return(
    <View>
        <Text>Pagina de inicio</Text>
    </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
            display: "flex",
            padding: 10,
            flex: 1,
            width: "100%",
            alignContent: "center",
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

export default Home