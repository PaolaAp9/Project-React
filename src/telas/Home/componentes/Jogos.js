import { FlatList, Text, StyleSheet, View } from "react-native";
import Jogo from "./Jogo";
import useJogos from "../../../hocks/useJogos";
import { useNavigation } from "@react-navigation/native";

export default function Jogos ({topo:Topo}){

    const [titulo,lista] = useJogos();
    const navigation = useNavigation();

    const TopoLista = () => {
        return <>
            <Topo/>
            <View style={estilos.detalhes}>
                <Text style={estilos.titulo}>{titulo}</Text>
            </View>
            
        </>
    }
    return <>
        <FlatList
            data={lista}
            renderItem={({ item }) => <Jogo {...item} 
            aoPressionar={() => { navigation.navigate ("JogoDescricao", item)}} />}
            keyExtractor={({ nome}) => nome }
            ListHeaderComponent = {TopoLista}
        /> 
    </>
}
const estilos = StyleSheet.create ({
    titulo: {
        fontSize:30,
        lineHeight:32 ,
        margin: 16,
        marginHorizontal:16,
        fontWeight:"bold",
        
    },
    detalhes:{
        alignItems:"center"
    }
}) 