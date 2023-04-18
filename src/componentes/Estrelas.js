import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import estrela from "../../assets/Jogos/estrela.png";
import estrelaCinza from "../../assets/Jogos/estrelaCinza.png"

export default function Estrelas ({
    quantidade: quantidadeAntiga, 
    editavel = true,
    grande = false,
}) {
    const [quantidade, setQauntidade ] = useState( quantidadeAntiga);
    const estilos = estilosFuncao (grande)

    const getImage = (index) => {
        if (index < quantidade){
            return estrela;
        }
        return estrelaCinza

    }

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++ ){
            listaEstrelas.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => setQauntidade(i +1)}
                    disabled = {!editavel}
                >  
                    <Image source={getImage(i)} style={estilos.estrela}/>
                </TouchableOpacity> 
            )
        }
        return listaEstrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas/>
    </View>

}
const estilosFuncao = (grande) => StyleSheet.create ({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight:3,
    },
    estrelas: {
        flexDirection:'row'
    }
})