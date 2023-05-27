import { useState } from "react" 

export default function MeuContador(){

    const [contador, setContador] = useState(0) 

    //--------------------------------------------exmplo 01

    // function aumentar(){
    //    setContador(contador + 1)
    // }

    // return(
    //     <div>
    //         <h1>Meu Contador: {contador}</h1>
    //         { contador > 9 ? <h2>Valor muito grande</h2> : null }
    //         <button onClick={aumentar}>aumentar</button>
    //     </div>
    // )

    //--------------------------------------------exmplo 02
    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir(){
        setContador(contador - 1)
    }

    if(contador > 5){
        return(
            <div>
                <h2>Valor muito alto!</h2>
                <button onClick={aumentar}>AUMENTAR</button>
                <button onClick={diminuir}>DIMINUIR</button>
            </div>
        )
    }

    return(
        <div>
            <h1>Meu Contador: {contador}</h1>
            <button onClick={aumentar}>AUMENTAR</button>
            <button onClick={diminuir}>DIMINUIR</button>
        </div>
    )

    //--------------------------------------------exmplo 03
    // if(isLoading){
    //     return(
    //         <div>
    //             <h2>Carregando...</h2>
    //         </div>
    //     )
    // }
}