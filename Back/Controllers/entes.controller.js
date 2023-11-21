import { pool } from "../db.js";

export const obtenerEnte = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  usuario WHERE ICCID = ?',[req.params.id]);
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const obtenerEntes = async (req,res)=>{
    try {
        const [result] = await pool.query('SELECT * FROM  usuario');
        res.json(result);
        console.log(result);
     } catch (error ){
        return res.status(500).json({mensaje: error.message});
     }
};

export const obtenerHlr = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  HLR_ID ');
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const obtenerRegBSS = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  Reg_BSS where CELL_ID = ?', [req.params.id,]);
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const obtenerEir = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  EIR ');
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const obtenerVlr = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  VLR ');
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const obtenerAuC = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  AUC ');
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const crearEntes = (req,res)=>{

};
export const actualizarEntes = (req,res)=>{

};
export const eliminarEntes = (req,res)=>{

};
