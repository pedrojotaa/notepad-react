import React, { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
    render(){
        return(
            <ul>
                {Array.of('Trabalho', 'Estudo', 'Negocios').map((categoria) => {
                    return(
                        <li>
                            <div>{categoria}</div>
                            <CardNota/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ListaDeNotas;
