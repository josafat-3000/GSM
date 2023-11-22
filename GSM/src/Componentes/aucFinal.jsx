import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import './AutenticacionNormal.css'; // Importa tu archivo de estilos
import TableComponent from './usuarioAutenticado';

const AucFinal = (data) => {
  const [aut, setAut] = useState("");
  const [handOf, setHandOf] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      IMSI_AuC: '',
      TIPO_CONTRASENA: '',
      PIN: '',
      PUK: '',
    },
    onSubmit: (values) => {
      console.log("values",values);
      console.log("data",data);
      if (values.IMSI_AuC != data.data.IMSI_AuC|| values.TIPO_CONTRASENA !=data.data.TIPO_CONTRASENA || values.PIN!=data.data.PIN || values.PUK!=data.data.PUK){
        alert("INCONGRUENCIA E LOS VALORES PIN Y PUK")
        window.location.reload()
      } else {
        alert("AUTENTICACION EXITOSA")
        window.location.reload()
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.IMSI_AuC) {
        errors.IMSI_AuC = 'IMSI_AuC es requerido';
      }
      if (!values.TIPO_CONTRASENA) {
        errors.TIPO_CONTRASENA = 'TIPO_CONTRASENA es requerido';
      }
      if (!values.PIN) {
        errors.PIN = 'PIN es requerido';
      }
      if (!values.PUK) {
        errors.PUK = 'PUK es requerido';
      }

      return errors;
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="my-form">
        
        <div className="form-group">
          <label htmlFor="IMSI_AuC">IMSI_AuC:</label>
          <input
            type="text"
            id="IMSI_AuC"
            name="IMSI_AuC"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.IMSI_AuC}
            className={`form-control ${formik.touched.IMSI_AuC && formik.errors.IMSI_AuC ? 'is-invalid' : ''}`}
          />
          {formik.touched.IMSI_AuC && formik.errors.IMSI_AuC ? (
            <div className="invalid-feedback">{formik.errors.IMSI_AuC}</div>
          ) : null}
        </div>
        {/* TIPO_CONTRASENA */}
        <div className="form-group">
          <label htmlFor="TIPO_CONTRASENA">TIPO_CONTRASENA:</label>
          <input
            type="text"
            id="TIPO_CONTRASENA"
            name="TIPO_CONTRASENA"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.TIPO_CONTRASENA}
            className={`form-control ${formik.touched.TIPO_CONTRASENA && formik.errors.TIPO_CONTRASENA ? 'is-invalid' : ''}`}
          />
          {formik.touched.TIPO_CONTRASENA && formik.errors.TIPO_CONTRASENA ? (
            <div className="invalid-feedback">{formik.errors.TIPO_CONTRASENA}</div>
          ) : null}
        </div>
        {/* PIN */}
        <div className="form-group">
          <label htmlFor="PIN">PIN:</label>
          <input
            type="text"
            id="PIN"
            name="PIN"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PIN}
            className={`form-control ${formik.touched.PIN && formik.errors.PIN ? 'is-invalid' : ''}`}
          />
          {formik.touched.PIN && formik.errors.PIN ? (
            <div className="invalid-feedback">{formik.errors.PIN}</div>
          ) : null}
        </div>
        {/* PUK */}
        <div className="form-group">
          <label htmlFor="PUK">PUK:</label>
          <input
            type="text"
            id="PUK"
            name="PUK"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.PUK}
            className={`form-control ${formik.touched.PUK && formik.errors.PUK ? 'is-invalid' : ''}`}
          />
          {formik.touched.PUK && formik.errors.PUK ? (
            <div className="invalid-feedback">{formik.errors.PUK}</div>
          ) : null}
        </div>
        <button style={{ marginBottom: '20px' }} type="submit" className="btn btn-primary">
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

export default AucFinal;
