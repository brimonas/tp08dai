
import express from "express";
import cors    from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js"

//SWAGGER
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./src/configs/swagger_output.json" with { type: "json" };

const app = express(); 
const port = 3000;
///




app.use(cors());
app.use(express.json()); 

app.use("/api/province/", ProvinceRouter); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(port, () => {   
console.log('Servidor corriendo en http://localhost:3000');
  console.log('Documentación Swagger en http://localhost:3000/api-docs');
})