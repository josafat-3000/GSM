import React, { useState } from 'react';
import { useFormik } from 'formik';
import './AutenticacionNormal.css'; // Importa tu archivo de estilos
import TableComponent from './usuarioAutenticado';

const AutenticacionVisita = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);
  const [send, setSend] = useState(null);
  const [aut, setAut] = useState(false);
  const [autTar, setAutTar] = useState(false);
  const [handOf, setHandOf] = useState(null);

  const fetchData = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/entes/${id}`);
      const jsonData = await response.json();

      // Aquí puedes manejar los datos recibidos
      setData(jsonData[0]);
    } catch (error) {
      // Aquí puedes manejar errores en la solicitud
      setError(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      IMSI_VLR: '', // datos de servicio del invitado
      ID_MSC_NATIVO: '', // Datos de su msc
      CELL_NATIVO: '', // ID de Celula de registro
      TARIFICACION: '', // CDMA 01 Renta, 10 Prepago, 11 paquete, 00 sin saldo
      MNC_VISITA: '', // datos de su proveedor
    },
    onSubmit: (values) => {
      // Puedes realizar alguna acción con los valores del formulario aquí
      setId(values.ICCID);
      setSend(values);
      fetchData(id);
      setHandOf({ ...values, ...handOf });

      if (
        data.REG_Y_ZONA === send.REG_Y_ZONA &&
        data.EQUIPO === send.EQUIPO &&
        data.ICCID === send.ICCID &&
        data.IMSI_USER === send.IMSI_USER &&
        data.TARIFA == send.TARIFA &&
        data.TARIFA != 0
      ) {
        console.log('NASA hackeada');
        setAut(true);
      } else {
        setAut(false);
        if (data.TARIFA == 0) {
          setAutTar(!autTar);
          alert('Sin saldo suficiente');
          window.location.reload();
        }
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.REG_Y_ZONA) {
        errors.REG_Y_ZONA = 'La zona de registro es requerida';
      }
      if (!values.EQUIPO) {
        errors.EQUIPO = 'El equipo es requerido';
      }
      if (!values.ICCID) {
        errors.ICCID = 'El ICCID es requerido';
      }
      if (!values.IMSI_USER) {
        errors.IMSI_USER = 'El IMSI_USER es requerido';
      }
      if (!values.TARIFA) {
        errors.TARIFA = 'La tarifa es requerida';
      }
      if (!values.CELL_ID) {
        errors.CELL_ID = 'CELL_ID es requerido';
      }
      // Puedes agregar más validaciones según tus necesidades

      return errors;
    },
  });

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

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>

      <div style={{ width: '100%' }}>
        {aut ? (
          <TableComponent data={handOf} />
        ) : (
            <h2>Autenticacción Fallida</h2>
        )}
      </div>
    </>
  );
};

export default AutenticacionVisita;
