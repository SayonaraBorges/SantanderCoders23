import { useEffect } from "react"
import { useState } from "react"

//Listas e chaves
const minhaLista = [
  {id: '1', value: 'Fruta'},
  {id: '2', value: 'Legume'},
  {id: '3', value: 'Carne'},
]

export default function App() {

  const [produtos, setProdutos]= useState(minhaLista)
  //toda vez que produtos for atulizada, minhaLista será atualizada automaticamente
  const [pesquisa, setPesquisa] = useState(' ')

  useEffect(
    () => {
      if(pesquisa){

        const novaLista = minhaLista.filter( (item) => {
          return item.value.toLowerCase().includes(pesquisa.toLowerCase())
        })
        setProdutos(novaLista)
      } else{
        setProdutos(minhaLista)
      }
    }
  ,[pesquisa])

  // console.log(pesquisa) : teste
   return (
    <div>
      <h1>Efeitos colaterais</h1>
      <input 
        value={pesquisa}
        onChange={(e) => setPesquisa(e.target.value)}
      placeholder="pesquise aqui">
      </input>
      {produtos.map((item) =>{
        return(
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}
    </div>
  )
}
