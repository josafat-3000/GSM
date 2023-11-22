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
export const obtenerEirId = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  EIR where IMSI_EIR = ?', [req.params.id,]);
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
export const obtenerAuCId = async (req,res)=>{
    try{
    console.log(req.params);
    const [result] = await pool.query('SELECT * FROM  AUC where IMSI_AUC = ?', [req.params.id,]);
    res.json(result);
    console.log(result);}
    catch (error){
        return res.status(500).json({mensaje: error.message});
    }
};

export const crearVlr = async (req,res)=>{
    try {
        const { IMSI_VLR,
        ID_MSC_NATIVO,
        CELL_NATIVO,
        TARIFICACION,
        MNC_VISITA } = req.body;
        const [result] = await pool.query(
          "INSERT INTO VLR (IMSI_VLR, ID_MSC_NATIVO, CELL_NATIVO, TARIFICACION, MNC_VISITA)  VALUES (?, ?, ?, ?, ?)",
          [IMSI_VLR,
            ID_MSC_NATIVO,
            CELL_NATIVO,
            TARIFICACION,
            MNC_VISITA]
        );
        res.json({
          id: result.insertId,
          IMSI_VLR,
            ID_MSC_NATIVO,
            CELL_NATIVO,
            TARIFICACION,
            MNC_VISITA
        });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const actualizarEntes = (req,res)=>{

};
export const eliminarEntes = (req,res)=>{

};
