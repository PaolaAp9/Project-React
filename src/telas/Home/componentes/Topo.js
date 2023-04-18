import {Text, Image, View, StyleSheet } from "react-native"

import logo from "../../../../assets/Jogos/logo.png"
import useTopo from "../../../hocks/useTopo";

export default function Topo () {

    const [boasVindas, legenda] = useTopo();
    
    return <View style={estilos.topo}>
        <View style={estilos.fundo}>
            <Image source={logo} style={estilos.logo} />
            <Text style={estilos.boasVindas}>{boasVindas}</Text>
        </View>
        <Text style={estilos.legenda}>{legenda}</Text>
    </View>

}
const estilos = StyleSheet.create ({
    topo: {
        backgroundColor:'#F6F6F6',
        padding:16,
    },
    fundo: {
        flexDirection: 'row',
        justifyContent:'center',

    },
    logo:{
        width:90,
        height:90,
    },
    boasVindas:{
        marginTop:24,
        fontSize:26,
        lineHeight:42,
        fontWeight:'bold',
        color:'#464646',
        marginLeft: 15,
    },
    legenda: {
        color:"#A3A3A3",
        fontSize:16,
        lineHeight:26,
        marginTop:20,
        textAlign:"center",
        fontWeight:'bold', 
    }
})
