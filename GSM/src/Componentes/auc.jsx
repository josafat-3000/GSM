import React, { useState } from 'react';
import './tabla.css';

const AucT = ({ data }) => {
  
  const reloadPage = () => {
    console.log(data.IMSI_USER)
    fetchEir(data.IMSI_USER);
    fetchAuc(data.IMSI_USER)

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

</div>

  );
};

export default AucT;
