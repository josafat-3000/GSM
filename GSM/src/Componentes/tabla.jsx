// /client/src/components/DataTable.js
import React from 'react';
import './tabla.css';
import cells from '../cells.jpg';

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No hay datos para mostrar.</p>;
  }

  return (
    <div className="table-container">
      <h2>Usuarios registrados</h2>
      <div className="image-container">
        <img src={cells} alt="Descripción de la imagen" />
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, subIndex) => (
                <td key={subIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
