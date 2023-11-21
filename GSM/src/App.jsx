import React, { useState, useEffect } from 'react';
import { getTasksRequest} from '../Api/entes.api';
import DataTable from './Componentes/tabla';
import SelectorConsulta from './Componentes/selectores';
// import { Routes, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  const [ente, setEnte] = useState(null);
  const [mostrarTabla, setMostarTabla]=useState(false);

  useEffect(()=>{
    async function cargarEnte(){
      const response = await getTasksRequest();
      setEnte(response.data);
    }
    cargarEnte();
  },[]);

  const handleSubmit= ()=>{
    setMostarTabla(!mostrarTabla);
  };
  return (
    <>
    <div>
      <h1>Proceso de Autenticación GSM</h1>
      <button onClick={handleSubmit} >Iniciar Autenticación</button>
      {mostrarTabla && <DataTable data={ente} />}
      {mostrarTabla && <SelectorConsulta />}
    </div>
    </>

  );
};

export default App;
