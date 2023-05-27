//Estados e Eventos
import { useState } from "react" //hook - função do react
export default function MeuContador(){

    const [contador, setContador] = useState(0) 
    //retorno do hook: arry de 2 posições
    //contador = variável de estado, setContador = função set

    function aumentar(){
        console.log('renderizando meu contador... ')
       setContador(contador + 1)
    }

    return(
        <div>
            <h1>Meu Contador</h1>
            <h3>{contador}</h3>
            <button onClick={aumentar}>aumentar</button>
            {/* dentro da tag on+crtlspace mostra outross eventos */}
        </div>
    )
}