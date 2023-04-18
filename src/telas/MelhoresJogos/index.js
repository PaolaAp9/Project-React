import { Text, StyleSheet } from "react-native"

export default function MelhoresJogos(){
    return <Text style={estilos.cartao}>Melhores Jogos</Text>
}

const estilos = StyleSheet.create ({
    cartao:{
        backgroundColor:"#FFFFFF",
        marginHorizontal: 25,
        borderRadius:10,
        elevation: 50,
        marginTop:10,
        textAlign:"center",
        fontSize:20

    }
})