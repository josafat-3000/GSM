import React, { useState } from 'react';
import { useFormik } from 'formik';
import './AutenticacionNormal.css'; // Importa tu archivo de estilos
import TableComponent from './usuarioAutenticado';

const AutenticacionVisita = () => {
  const [aut, setAut] = useState("");
  const [handOf, setHandOf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      IMSI_VLR: '',
      ID_MSC_NATIVO: '',
      CELL_NATIVO: '',
      TARIFICACION: '',
      MNC_VISITA: '',
    },
    onSubmit: (values) => {
      console.log(values);
      if (values.TARIFICACION === '0') {
        alert('Sin saldo suficiente');
        window.location.reload();
      } else {
        setHandOf(values)
        insertDataToDatabase(values);
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.IMSI_VLR) {
        errors.IMSI_VLR = 'IMSI_VLR es requerido';
      }
      if (!values.ID_MSC_NATIVO) {
        errors.ID_MSC_NATIVO = 'ID_MSC_NATIVO es requerido';
      }
      if (!values.CELL_NATIVO) {
        errors.CELL_NATIVO = 'CELL_NATIVO es requerido';
      }
      if (!values.TARIFICACION) {
        errors.TARIFICACION = 'TARIFICACION es requerida';
      }
      if (!values.MNC_VISITA) {
        errors.MNC_VISITA = 'MNC_VISITA es requerido';
      }

      return errors;
    },
  });

  const insertDataToDatabase = async (values) => {
    try {
      setIsLoading(true);

      const response = await fetch('http://localhost:3000/vlr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          IMSI_VLR: values.IMSI_VLR,
          ID_MSC_NATIVO: values.ID_MSC_NATIVO,
          CELL_NATIVO: values.CELL_NATIVO,
          TARIFICACION: values.TARIFICACION,
          MNC_VISITA: values.MNC_VISITA,
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('Inserción exitosa');
        setAut("Éxito");
        setHandOf(result.data); // Asegúrate de que result.data sea la estructura correcta
      } else {
        console.error('Error al insertar en la base de datos');
        setAut("Fallido");
      }
    } catch (error) {
      console.error('Error en la solicitud de inserción', error);
      setAut("Fallido");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
       <form onSubmit={formik.handleSubmit} className="my-form">
        {/* ... Campos del formulario ... */}
        <div className="form-group">
          <label htmlFor="IMSI_VLR">IMSI_VLR:</label>
          <input
            type="text"
            id="IMSI_VLR"
            name="IMSI_VLR"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.IMSI_VLR}
            className={`form-control ${formik.touched.IMSI_VLR && formik.errors.IMSI_VLR ? 'is-invalid' : ''}`}
          />
          {formik.touched.IMSI_VLR && formik.errors.IMSI_VLR ? (
            <div className="invalid-feedback">{formik.errors.IMSI_VLR}</div>
          ) : null}
        </div>
        {/* ... Otros campos ... */}
<div className="form-group">
  <label htmlFor="ID_MSC_NATIVO">ID_MSC_NATIVO:</label>
  <input
    type="text"
    id="ID_MSC_NATIVO"
    name="ID_MSC_NATIVO"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.ID_MSC_NATIVO}
    className={`form-control ${formik.touched.ID_MSC_NATIVO && formik.errors.ID_MSC_NATIVO ? 'is-invalid' : ''}`}
  />
  {formik.touched.ID_MSC_NATIVO && formik.errors.ID_MSC_NATIVO ? (
    <div className="invalid-feedback">{formik.errors.ID_MSC_NATIVO}</div>
  ) : null}
</div>

<div className="form-group">
  <label htmlFor="CELL_NATIVO">CELL_NATIVO:</label>
  <input
    type="text"
    id="CELL_NATIVO"
    name="CELL_NATIVO"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.CELL_NATIVO}
    className={`form-control ${formik.touched.CELL_NATIVO && formik.errors.CELL_NATIVO ? 'is-invalid' : ''}`}
  />
  {formik.touched.CELL_NATIVO && formik.errors.CELL_NATIVO ? (
    <div className="invalid-feedback">{formik.errors.CELL_NATIVO}</div>
  ) : null}
</div>

<div className="form-group">
  <label htmlFor="TARIFICACION">TARIFICACION:</label>
  <input
    type="text"
    id="TARIFICACION"
    name="TARIFICACION"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.TARIFICACION}
    className={`form-control ${formik.touched.TARIFICACION && formik.errors.TARIFICACION ? 'is-invalid' : ''}`}
  />
  {formik.touched.TARIFICACION && formik.errors.TARIFICACION ? (
    <div className="invalid-feedback">{formik.errors.TARIFICACION}</div>
  ) : null}
</div>

<div className="form-group">
  <label htmlFor="MNC_VISITA">MNC_VISITA:</label>
  <input
    type="text"
    id="MNC_VISITA"
    name="MNC_VISITA"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.MNC_VISITA}
    className={`form-control ${formik.touched.MNC_VISITA && formik.errors.MNC_VISITA ? 'is-invalid' : ''}`}
  />
  {formik.touched.MNC_VISITA && formik.errors.MNC_VISITA ? (
    <div className="invalid-feedback">{formik.errors.MNC_VISITA}</div>
  ) : null}
</div>
        <button style={{marginBottom: '20px'}} type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      <div style={{ width: '100%' }}>
      {aut?(
      <TableComponent data={handOf}/>
      ):
        <h2>Autenticacción Fallida</h2>
      }
      </div>
    </>
  );
};

export default AutenticacionVisita;
