import { ListaProdutos } from "../Components/ListaProdutos"
import { useState } from "react";
import './AddProdutos.css'


export default function AddProdutos(){
  const [produtos, setProdutos] = useState(ListaProdutos);
  const [novoProduto, setNovoProduto] = useState({ id: '', nome: '', preco: '' });

  const adicionarProduto = () => {
    if (novoProduto.id && novoProduto.nome && novoProduto.preco) {
      setProdutos([...produtos, novoProduto]);
      setNovoProduto({ id: '', nome: '', preco: '' });
    } else {
      alert('Por favor, preencha todos os campos do produto.');
    }
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>R$ {produto.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Adicionar Novo Produto</h2>
        <input className="input-m"
          type="text"
          placeholder="ID"
          value={novoProduto.id}
          onChange={(e) => setNovoProduto({ ...novoProduto, id: e.target.value })}
        />
        <input className="input-m"
          type="text"
          placeholder="Nome"
          value={novoProduto.nome}
          onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })}
        />
        <input className="input-m"
          type="text"
          placeholder="Preço"
          value={novoProduto.preco}
          onChange={(e) => setNovoProduto({ ...novoProduto, preco: e.target.value })}
        />
        <button onClick={adicionarProduto}>Adicionar Produto</button>
      </div>
    </div>
  );
}