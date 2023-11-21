import React from 'react';
import { useFormik } from 'formik';
import './AutenticacionNormal.css'; // Importa tu archivo de estilos

const AutenticacionNormal = () => {
    const formik = useFormik({
        initialValues: {
          REG_Y_ZONA: '',
          EQUIPO: '',
          ICCID: '',
          IMSI_USER: '',
          TARIFA: '',
          CELL_ID: '',
        },
    onSubmit: (values) => {
      // Puedes realizar alguna acción con los valores del formulario aquí
      console.log('Valores del formulario:', values);
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
    <form onSubmit={formik.handleSubmit} className="my-form">
      <div className="form-group">
        <label htmlFor="REG_Y_ZONA">Zona de Registro:</label>
        <input
          type="text"
          id="REG_Y_ZONA"
          name="REG_Y_ZONA"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.REG_Y_ZONA}
          className={`form-control ${formik.touched.REG_Y_ZONA && formik.errors.REG_Y_ZONA ? 'is-invalid' : ''}`}
        />
        {formik.touched.REG_Y_ZONA && formik.errors.REG_Y_ZONA ? (
          <div className="invalid-feedback">{formik.errors.REG_Y_ZONA}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="EQUIPO">Equipo:</label>
        <input
          type="text"
          id="EQUIPO"
          name="EQUIPO"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.EQUIPO}
          className={`form-control ${formik.touched.EQUIPO && formik.errors.EQUIPO ? 'is-invalid' : ''}`}
        />
        {formik.touched.EQUIPO && formik.errors.EQUIPO ? (
          <div className="invalid-feedback">{formik.errors.EQUIPO}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="ICCID">ICCID:</label>
        <input
          type="text"
          id="ICCID"
          name="ICCID"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ICCID}
          className={`form-control ${formik.touched.ICCID && formik.errors.ICCID ? 'is-invalid' : ''}`}
        />
        {formik.touched.ICCID && formik.errors.ICCID ? (
          <div className="invalid-feedback">{formik.errors.ICCID}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="IMSI_USER">IMSI_USER:</label>
        <input
          type="text"
          id="IMSI_USER"
          name="IMSI_USER"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.IMSI_USER}
          className={`form-control ${formik.touched.IMSI_USER && formik.errors.IMSI_USER ? 'is-invalid' : ''}`}
        />
        {formik.touched.IMSI_USER && formik.errors.IMSI_USER ? (
          <div className="invalid-feedback">{formik.errors.IMSI_USER}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="TARIFA">Tarifa:</label>
        <input
          type="text"
          id="TARIFA"
          name="TARIFA"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.TARIFA}
          className={`form-control ${formik.touched.TARIFA && formik.errors.TARIFA ? 'is-invalid' : ''}`}
        />
        {formik.touched.TARIFA && formik.errors.TARIFA ? (
          <div className="invalid-feedback">{formik.errors.TARIFA}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="CELL_ID">CELL_ID:</label>
        <input
          type="text"
          id="CELL_ID"
          name="CELL_ID"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.CELL_ID}
          className={`form-control ${formik.touched.CELL_ID && formik.errors.CELL_ID ? 'is-invalid' : ''}`}
        />
        {formik.touched.CELL_ID && formik.errors.CELL_ID ? (
          <div className="invalid-feedback">{formik.errors.CELL_ID}</div>
        ) : null}
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default AutenticacionNormal;
