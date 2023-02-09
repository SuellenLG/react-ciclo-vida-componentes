import React, { Component } from "react";
import "./estilo.css";
//import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg"
import deleteSVG from "../../assets/img/delete.svg"

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }
  
  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/*<DeleteSVG onClick={this.apagar.bind(this)}/>*/}
          <img src={deleteSVG} onClick={this.apagar.bind(this)} />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>

      </section>
    );
  }
}

export default CardNota;

/* 
importar:
 import deleteSVG from "../../assets/img/delete.svg"
 dentro do header:
   <img src={deleteSVG}/>

   import {ReactComponent ass DeleteSVG} from"../../assets/img/delete.svg"
dentro do header:
   1) <DeleteSVG/>  
   2) <svg ...../> (copiar do site)

*/