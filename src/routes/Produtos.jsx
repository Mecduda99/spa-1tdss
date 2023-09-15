import { Link } from "react-router-dom"
import { ListaProdutos } from "../Components/ListaProdutos"
import  styles from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";
import {MdDeleteForever as Excluir} from "react-icons/md";
import { BiSolidAlarmAdd } from 'react-icons/bi';


export default function Produtos() {

  document.title = "Lista de Produtos";


  return (
    <div>
        <h1>Produtos</h1>

        <table className={styles.table}>
            <thead>
            <tr>
                <th className={styles.tableHeader}>ID</th>
                <th className={styles.tableHeader}>NOME</th>
                <th className={styles.tableHeader}>PREÇO</th>
                <th className={styles.tableHeader}>EDITAR / EXCLUIR</th>
                <th className={styles.tableHeader}>ADICIONAR</th>
            </tr>
            </thead>
            <tbody>
            {ListaProdutos.map((produto,indice)=>(
                 <tr key={indice}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td><Link to={`/editar/produtos/${produto.id}`}> <Editar/> </Link> | <Link to={`/excluir/produtos/${produto.id}`}> <Excluir/> </Link> </td>
                 </tr>
            ))}
        </tbody>
        <tfoot>
        <tr>
          <Link to={`/add/produtos`}> <BiSolidAlarmAdd/> </Link>
           <td colSpan={4} style={{textAlign:"center"}}>PRODUTOS</td>
        </tr>
        </tfoot>
        </table>
        
    </div>
  )
}
