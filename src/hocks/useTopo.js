import { useEffect, useState } from "react";
import { carregaTopo } from "../servicos/carregaDados";

export default function useTopo () {
    const [boasVindas, setBoasvindas] = useState ('')
    const [legenda, setLegenda] = useState ([])

    useEffect (() => {
        const retorno = carregaTopo();
        setBoasvindas(retorno.boasVindas)
        setLegenda(retorno.legenda)
    }, [])

    return [boasVindas, legenda]
}