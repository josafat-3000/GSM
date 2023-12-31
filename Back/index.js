import express from 'express';
import indexRoutes from './Routes/index.routes.js';
import entesRoutes from './Routes/db.routes.js';
import morgan from 'morgan';


const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express.json());    
app.use(indexRoutes);
app.use(entesRoutes);
app.use(morgan('tiny'));


app.listen(3000, ()=>{
    console.log("Listen on port 3000");
});  