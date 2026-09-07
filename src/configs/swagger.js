import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: 'TP08.2 Provincias',
    description: 'El siguiente proyecto lista una base de datos de provincias y presenta funcionalidads como eliminar, modificar, listar, etc.' ,
    version: '1.0.0',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  definitions: {
    Provincia: {
      id:       1,
      nombre:   'Buenos Aires',
      orden:   1,
      activo:  '1'
    },
    AlumnoInput: {
      $nombre:  'Buenos Aires',
      $orden:  1,
      $activo: '1'
    },
  },
};

const outputFile      = './swagger_output.json';
const endpointsFiles  = ['./src/controllers/province-controller.js'];
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Swagger generado correctamente");
});

