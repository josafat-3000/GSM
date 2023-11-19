import { pool } from "../db.js";

export const obtenerEnte = async (req,res)=>{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  usuario WHERE ICCID = ?',[req.params.id]);
    res.json(result);
    console.log(result);
};
export const obtenerEntes = async (req,res)=>{
    const [result] = await pool.query('SELECT * FROM  usuario');
    res.json(result);
    console.log(result);
};
export const crearEntes = (req,res)=>{

};
export const actualizarEntes = (req,res)=>{

};
export const eliminarEntes = (req,res)=>{

};
