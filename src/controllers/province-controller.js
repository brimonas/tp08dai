
import {Router} from 'express';
import ProvinceService from './../services/province-service.js' 

///S

const router = Router();
const currentService = new ProvinceService();

router.get('/', async (req, res) => {
  /*  
      #swagger.summary = 'Obtiene la lista completa de alumnos'
      #swagger.responses[200] = {
        description: 'Lista de alumnos',
        schema: { $ref: '#/definitions/Provincia' }
      }
  */
    try {

        const returnEntity =
            await currentService.getAllAsync();

        res.status(200).json(returnEntity);

    } catch (error) {

        res.status(500).send(`Error: ${error.message}`);
    }
});
router.get('/:id', async (req, res) => {
/*
#swagger.summary = 'Obtener provincia por ID'
#swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer'
}
       #swagger.responses[200] = {
        description: 'Lista de provincias',
        schema: { $ref: '#/definitions/Provincia' }
      }
*/
    try {

        let id = req.params.id;

        const returnEntity =
            await currentService.getByIdAsync(id);

        if (returnEntity != null) {

            res.status(200).json(returnEntity);

        } else {

            res.status(404).send(
                `No existe provincia con id ${id}`
            );
        }

    } catch (error) {

        res.status(500).send(`Error: ${error.message}`);
    }
});
router.post('/', async (req, res) => {
/*
#swagger.summary = 'Crear una provincia'

 #swagger.parameters['body'] = {
        in: 'body',
        description: 'Datos de la provincia a crear',
        required: true,
        schema: { $ref: '#/definitions/ProvinciaInput' }
      }
      #swagger.responses[201] = { description: 'Provincia creado exitosamente' }
      #swagger.responses[400] = { description: 'Datos inválidos' }
*/
    try {

        const entity = req.body;

        const rowsAffected = await currentService.createAsync(entity);

        if (rowsAffected > 0) {

            res.status(201).json(rowsAffected);

        } else {

            res.status(400).send('No se pudo insertar.');
        }

    } catch (error) {

        res.status(400).send(`Error: ${error.message}`);
    }
});
router.put('/:id', async (req, res) => {
/*
#swagger.summary = 'Modificar una provincia'

#swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer'
}

#swagger.parameters['body'] = {
        in: 'body',
        description: 'Nuevos datos del alumno',
        required: true,
        schema: { $ref: '#/definitions/ProvinciaInput' }
      }
      #swagger.responses[200] = { description: 'Provincia actualizado' }
      #swagger.responses[404] = { description: 'Provincia no encontrado' }
*/
    try {
    let id = parseInt(req.params.id);
        let entity = req.body;

        if (entity.id && parseInt(entity.id) !== id) {
            return res.status(404).send(`no existe la provincia`);
        }
        entity.id = id;
        const rowsAffected =
            await currentService.updateAsync(entity);

        res.status(201).json(rowsAffected);
    } catch (error) {

        res.status(400).send(`Error: ${error.message}`);
    }
});

router.delete('/:id', async (req, res) => {
/*
#swagger.summary = 'Eliminar una provincia'

#swagger.parameters['id'] = {
    in: 'path',
    required: true,
    type: 'integer'
}
*/
    try {

        let id = req.params.id;

        const rowsAffected =
            await currentService.deleteByIdAsync(id);

        if (rowsAffected > 0) {

            res.status(200).send('Provincia eliminada.');

        } else {

            res.status(404).send(
                `No existe provincia con id ${id}`
            );
        }

    } catch (error) {

        res.status(500).send(`Error: ${error.message}`);
    }
});

export default router;


/*
localhost:3000/provinces
localhost:3000/provinces/3
localhost:3000/provinces
{
  "nombre":"Salta",
  "orden":10,
  "activo":1
}



localhost:3000 /provinces/5
{
   "nombre":"Mendoza",
   "orden":2,
   "activo":1
}
*/
