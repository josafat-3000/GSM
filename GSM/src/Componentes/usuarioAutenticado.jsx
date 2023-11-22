import React from 'react';
import './tabla.css';

const TableComponent = ({ data }) => {
  const reloadPage = () => {
    // Actualizar la página
    window.location.reload();
  };
  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
  <h2>Usuario Autenticado correctamente</h2>

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

  <button onClick={reloadPage}>
      Continuar
    </button>
</div>

  );
};

export default TableComponent;
