import { View, Text, StyleSheet } from "react-native"

export default function JogoDetalhes({descricao, valor, console, conteudo}) {

    return <View>
        <View style={estilos.informacoes}>
               
        </View>
            <View> 
                <Text style={estilos.conteudo}>{conteudo}</Text>
            </View>
            <View style={estilos.detalhes}>
                <Text style={estilos.plataforma}>{console}</Text>
                <Text style={estilos.preco}>{valor}</Text>
            </View>
        </View>
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
        width:400,
        height:200,
        borderRadius:6,
        marginVertical: 8,
        marginLeft: 6
    },
    informacoes:{       
        alignItems:'center',
        marginBottom:15
    },
    detalhes:{
        marginVertical:30,
        alignItems:"center",
        backgroundColor:"#bfd8ad",
        borderRadius:50,
        marginLeft:50,
        marginRight:50
    },
    plataforma: {
        fontSize:15,
        lineHeight:20,
        justifyContent:'space-around',
        marginTop:5
    },
    preco: {
        fontSize:30,
        lineHeight:32,
        fontWeight:"bold",
        color: '#b42529',
        marginTop:5

    },
    conteudo:{
        fontSize:15,
        textAlign:"center"
    }
})
