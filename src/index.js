import express from "express";
import { authRouter } from "./routes/auth.js";
import mongoose from "mongoose";

// Inicializaciones
const app = express();
mongoose.connect('mongodb://localhost/UNO-Fighting').then(db => console.log('MongoDB conectado correctamente')).catch(err => console.error(err));

// Configuración
app.set('port', process.env.PORT || 3000);

// Rutas
app.use("/auth", authRouter);

// Iniciar el servidor
app.listen(app.get('port'), () => {
	console.log(`Servidor iniciado en http://localhost:${app.get('port')}`);
});