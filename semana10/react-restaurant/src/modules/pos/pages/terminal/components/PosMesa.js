import React, { useContext } from "react";
import PosContext from "../../../../../context/posContext";

const PosMesa = ({objMesa}) => {

  const {objMesaGlobal, setObjMesaGlobal} = useContext(PosContext);

  return (
    <li className={`mesas__mesa ${objMesa.mesa_id === objMesaGlobal?.mesa_id ? "activo" : ""}`}
    onClick={() => {
    setObjMesaGlobal({...objMesa});
    }}>
      <span className="mesas__titulo">Mesa</span>
      <span className="mesas__numero">{objMesa.mesa_nro}</span>
    </li>
  );
};

export default PosMesa;
