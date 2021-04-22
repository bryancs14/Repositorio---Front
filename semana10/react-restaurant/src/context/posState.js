import React, { useState } from "react";
import PosContext from "./posContext";

const PosState = (props) => {
  const [objMesaGlobal, setObjMesaGlobal] = useState(null);
  const [objCategoriaGlobal, setObjCategoriaGlobal] = useState(null);
  const [pedidos, setPedidos] = useState([]);

  const modificarPlatoContext = (objPlato, accion) => {
    //Obtener una copia del estado de pedidos
    let pedidosActuales = [...pedidos]
    //1.verificar si tenemos una mesa global seleccionada para agregar el plato
    //en caso contrario no hacer nada
    if(!objMesaGlobal) return;
    //2. preguntamos si el arreglo de pedidios ya 
    //tiene un pedido pendiente en la mesa global seleccionada
    let objPedido = pedidosActuales.find((objPedido) => objMesaGlobal.mesa_id === objPedido.mesa_id)
    if(objPedido) {
      //Ya habia un pedido para la mesa global seleccionada
      //Si hemos encontrado un objpedido, no implica que el plato que queremos 
      let indexPlatoPedido = objPedido.platos.findIndex((objPlatoPedido) => objPlatoPedido.plato_id === objPlato.plato_id)
      if(indexPlatoPedido >= 0) {
        //el plato ya existe, se le aumenta 1
        if(accion === "sumar") {
          objPedido.platos[indexPlatoPedido].plato_cant++;
        } else if(accion === "restar") {
          objPedido.platos[indexPlatoPedido].plato_cant--;
          if(objPedido.platos[indexPlatoPedido].plato_cant === 0){
            objPedido.platos.splice(indexPlatoPedido, 1);
            //como quiera que acabamos de borrar un plato del arreglo, es posible que
            //dicho plato sea el ultimo del pedido, en conclusion, debemos borrar
            //ese objPedido
            if(objPedido.platos.length === 0) {
              pedidosActuales = pedidosActuales.filter((pedido) => pedido.mesa_id !== objMesaGlobal.mesa_id)
            }
          }
        }
      } else {
        //es el primer plato
        if(accion === "sumar") {
          objPedido.platos.push({
            ...objPlato,
            plato_cant: 1
          });
        }
      }
    } else {
      //No habia ningun pendio para la mesa selecionada(es un nuevo pedido)
      if(accion === "sumar") {
        pedidosActuales.push({
          usu_id: 0,
          mesa_id: objMesaGlobal.mesa_id,
          pedido_est: "pendiente",
          platos: [
            {
              ...objPlato,
              plato_cant: 1
            }
          ]
        })
      }
    }
    setPedidos(pedidosActuales);
  }

  return (
    <PosContext.Provider
      value={{
        objMesaGlobal,
        setObjMesaGlobal,
        objCategoriaGlobal,
        setObjCategoriaGlobal,
        pedidos,
        modificarPlatoContext
      }}
    >
      {props.children}
    </PosContext.Provider>
  );
};

export default PosState;
