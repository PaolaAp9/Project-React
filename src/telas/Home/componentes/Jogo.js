import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"


export default function Jogo ({nome, imagem, plataforma, estrelas, preco, aoPressionar }) {

    return <TouchableOpacity 
        style={estilos.cartao}
        onPress={aoPressionar}>

        <Image source={imagem} style={estilos.imagem}/>
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
            </View>
            <View style={estilos.detalhes}>
                <Text style={estilos.plataforma}>{plataforma}</Text>
                <Text style={estilos.preco}>{preco}</Text>
            </View>
        </View>
    </TouchableOpacity>
 }

const estilos = StyleSheet.create ({
    cartao:{
        backgroundColor:"#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:6,
        flexDirection: 'row',
        elevation: 4,

    },
    imagem: {
        width:80,
        height:58,
        borderRadius:6,
        marginVertical: 8,
        marginLeft: 16
    },
    informacoes:{
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft:8,
        marginVertical:16,
        marginRight:16
    },
    detalhes:{
        alignItems:'flex-end'
    },
    nome:{
        fontSize:14,
        lineHeight:22,
        fontWeight:15,
        fontWeight:"bold",
        
    },
    plataforma: {
        fontSize:12,
        lineHeight:20,
        justifyContent:'space-around'
    },
    preco: {
        fontSize:22,
        lineHeight:32,
        fontWeight:"bold",
        color: '#FF4444'

    },

})