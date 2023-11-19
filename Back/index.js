import express from 'express';
import indexRoutes from './Routes/index.routes.js';
import entesRoutes from './Routes/db.routes.js';

const app = express();

app.use(indexRoutes);
app.use(entesRoutes);
app.listen(3000, ()=>{
    console.log("Listen on port 3000");
});  