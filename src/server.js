import 'dotenv/config'
import express 	from "express";	// hacer npm i express
import cors 	from "cors";	// hacer npm i cors

// Controllers
import ProvinceController from "./controllers/province-controller.js"
const app = express();

app.use("/api/province", ProvinceController);
const port = process.env.PORT || 3000;  // si no esta definido en el archivo .env uso el 3000.

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON


//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {	// Inicio el servidor WEB (escuchar)
    console.log("server.js");
    console.log(`Listening on http://localhost:${port}`)
})