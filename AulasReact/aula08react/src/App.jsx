//Buscando dados com fetch | Aula 08

import { useState } from "react"
import { useEffect } from "react"

const tarefas = [
  { id: '1', title: 'minha primeira tarefa' },
  { id: '2', title: 'minha segunda tarefa' },
  { id: '3', title: 'minha terceira tarefa' },
  { id: '4', title: 'minha quarta tarefa' },
]

export default function App() {

  const [tarefas, setTarefas] = useState([])
  //efeitoColateral - busca de dados - um hook 
  //fetch
  useEffect(()=>{
    async function buscarDados(){
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadofinal = await resultado.json()
      return resultadofinal
    }
    buscarDados().then(res => setTarefas(res))
  }, [])

  return (
    <div>
      <h1>Buscando Dados</h1>
      <ol>
        {/* dentro da funcao map tem uma arrow function  */}
        {tarefas.map((tarefa) => {
          return (
            <div>
              <li key={tarefa.id}>{tarefa.title}
              {tarefa.completed ? '- OK' : null}
              {/* renderização condicional */}
              </li>
            </div>
          )
        })}
      </ol>
    </div>
  )
}

