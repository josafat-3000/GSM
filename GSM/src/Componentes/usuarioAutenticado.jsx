import React, { useState } from 'react';
import './tabla.css';
import AucT from './auc'; 
import AucFinal from './aucFinal';
const TableComponent = ({ data }) => {
  const [dataE, setDataE] = useState(null);
  const [dataA, setDataA] = useState(null);
  const [auc, setAuc] = useState(false);

  
  const fetchEir = async (id) => {
    try {      
      
  
  console.log('id',id)
  const response = await fetch(`http://localhost:3000/eir/${id}`);
      const jsonData = await response.json();

      // Aquí puedes manejar los datos recibidos
      console.log(jsonData,id)
      setDataE(jsonData[0]);
    } catch (error) {
      // Aquí puedes manejar errores en la solicitud
      console.error(error);
    }
  };
  const fetchAuc = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/auc/${id}`);
      const jsonData = await response.json();

      // Aquí puedes manejar los datos recibidos
      setDataA(jsonData[0]);
      console.log(jsonData,id)
    } catch (error) {
      // Aquí puedes manejar errores en la solicitud
      console.error(error);
    }
  };
  const reloadPage = () => {
    console.log(data.IMSI_USER)
    fetchEir(data.IMSI_USER);
    fetchAuc(data.IMSI_USER)
    console.log("u",dataE.CONFIRMACION_EDO,dataE.FACILIDADES_EQUIP)
    if(dataE.FACILIDADES_EQUIP=="SMS,AUDIO,MI"){
      alert("Facilidades del equipo insuficientes")
      window.location.reload();
    }
    else if(dataE.CONFIRMACION_EDO == 0){
      alert("Dispositivo en lista negra");
      window.location.reload();
    }
    
    setAuc(true);
    // Actualizar la página
    //window.location.reload();
  };
  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>


  <table style={{ margin: 'auto' }}>
    <tbody>
      {Object.entries(data).map(([key, value], index) => (
        <tr key={index}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
  

  <button style={{marginBottom: '20px'}}onClick={reloadPage}>
      Continuar
    </button>
    {auc&&<AucT data = {dataA}/>}
    {auc&&<AucFinal  data ={dataA}/>}

</div>

  );
};

export default TableComponent;
