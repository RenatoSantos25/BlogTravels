import React from "react"; 
import styles from "./Produto.modules.css";

const Produto = () => { 
  return ( 
    <div> 
      <h1>Cadastrar Produto</h1> 
      <form> 
        <label> 
            <span> 
                Nome do produto: 
            </span> 
            <input type="text" name="NomeProduto" required placeholder="Nome Produto" /> 
        </label> 
        <label> 
            <span> 
                Tipo do produto: 
            </span> 
            <input type="text" name="TipoProduto" required placeholder="Tipo do produto" /> 
        </label> 
        <label> 
            <span> 
                Marca do produto: 
            </span> 
            <input type="text" name="MarcaProduto" required placeholder="Marca do produto" /> 
        </label> 
        <label> 
            <span> 
                Preço do produto: 
            </span> 
            <input type="text" name="PreçoProduto" required placeholder="Preço do produto" /> 
        </label> 
        <button className="btn"> 
            Cadastrar 
        </button> 
      </form> 
    </div> 
  ); 
}

export default Produto;
