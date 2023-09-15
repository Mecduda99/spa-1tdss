import { ListaProdutos } from "../Components/ListaProdutos"
export default function AddProdutos(){

    return(
        <div>
      <h1>Minha Lista de Produtos</h1>
      <ul>
        {ListaProdutos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => adicionarItem('Novo Item')}>
        Adicionar Item
      </button>
    </div>
    )
}