import { useState } from "react"

const Pokemon = () => {
    // MUDAR O ESTADO DO DROWZEE
    const [virar, setVirar] = useState(true)

    // FRENTE E COSTA DA IMAGEM DO DROWZEE
    const imagemFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png";
    const imagemCostas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/96.png";

    // FUNÇÃO PARA VIRAR A IMAGEM DO DROWZEE
    const virarImagem = () => { setVirar(!virar) }

    return (
        <div>
            <h1>Questão2</h1>
            <h2>Drowzee - 96</h2>
            <img src={virar ? imagemCostas : imagemFrente} alt="Drowzee" onClick={virarImagem} />
            <button onClick={virarImagem}>Virar</button>
        </div>
    )


}

export default Pokemon