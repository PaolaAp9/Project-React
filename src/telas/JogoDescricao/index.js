import React from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList ,Text, StyleSheet, TouchableOpacity, Image} from "react-native";

import JogoDetalhes from "./componentes/JogoDetalhes";

export default function JogoDescricao ({ navigation }) {
    const route = useRoute();
    const {nome, detalhes, imagem } = route.params;

    const TopoLista = () => {
        return <>
            <Text style={estilos.nome}>{nome}</Text> 
            <TouchableOpacity  onPress={() => navigation.goBack ()}> 
                <Image style = {estilos.imagem} source={imagem}/>
            </TouchableOpacity>
        </>
}

    return <FlatList
        ListHeaderComponent={TopoLista}
        data={detalhes}
        renderItem={({item}) => <JogoDetalhes {... item} jogo={{nome}} 
        />}
    />
}
const estilos = StyleSheet.create ({
    nome: {
        fontSize:30,
        lineHeight:60,   
        textAlign:"center",
        backgroundColor:"#8cd19d",
        marginTop:10,

    },
    imagem: {
        width:400,
        height:200,
        borderRadius:6,
        marginVertical: 8,
        marginLeft: 6
    },
})
