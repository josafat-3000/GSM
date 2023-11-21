import React, { useState } from 'react';
import { getRegRequest } from '../../Api/entes.api';
import './tabla.css';
import AutenticacionNormal from './Aut1';



const SelectorConsulta = () => {
  const [selectedOption, setSelectedOption] = useState('38903');
  const [distance, setDistance] = useState('');
  const [reg, setReg] = useState(null);
  const [Rx, setRx] = useState(0);
  const [aut1, setAut1] = useState(false)

  const handleSelectorChange = async (e) => {
    const newSelectedOption = e.target.value;
    setSelectedOption(newSelectedOption);

    try {
      const response = await getRegRequest(newSelectedOption);
      setReg(response.data[0]);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const handleDistanceChange = (e) => {
    setDistance(e.target.value);
  };

  const handleDistanceSubmit = async () => {
    console.log('Distancia enviada:', distance);
    let l0 = 32.4 + 20 * Math.log10(893.5) + 20 * Math.log10(distance / 1000);
    let prx = Math.pow(15 * 1.68 / Math.pow(distance, 2), 2) * (3.9 * 15 / l0) * 0.01;
    let prxdb = 10 * Math.log10(prx / 0.001);
    setRx(prxdb);

    if (prxdb < -90) {
      // Mostrar alerta
      alert('La potencia de recepción es menor a -90 dBm. No hay potencia suficiente para el servicio.');

      // Actualizar la página (puedes cambiar la lógica según tus necesidades)
      window.location.reload();
    }
    else 
      setAut1(true);
  };

  const isDistanceValid = () => {
    return distance === '' || parseInt(distance, 10) <= 1400;
  };

  return (
    <div>
      <h2>Selecciona la radiobase</h2>
      <select value={selectedOption} onChange={handleSelectorChange}>
        <option value="38903">Radiobase 1</option>
        <option value="39763">Radiobase 2</option>
        <option value="37952">Radiobase 3</option>
        <option value="39762">Radiobase 4</option>
        <option value="324592">Radiobase 5</option>
      </select>

      {reg && (
        <div className='container'>
          <h2>Datos de la Radiobase</h2>
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(reg).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='distance-form-container'>
            <h2>Ingrese la distancia</h2>
            <input type="number" value={distance} onChange={handleDistanceChange} />
            <button className="btn1" onClick={handleDistanceSubmit}>
              Enviar Distancia
            </button>
            <p>La potencia recibida es: {Rx} dB</p>
            {aut1 && <AutenticacionNormal/>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectorConsulta;
