import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: 'pg provincias',
    description: 'Eaprendemos a usar swagger' ,
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
const endpointsFiles  = ['./controllers/province-controller.js'];
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log("Swagger generado correctamente");
});