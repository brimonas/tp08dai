
import {Router} from 'express';
import ProvinceService from './../services/province-service.js' 
import { StatusCodes } from 'http-status-codes';

const router = Router();
const currentService = new ProvinceService();

router.get('', async (req, res) => {

    try {

        const returnEntity =
            await currentService.getAllAsync();

        res.status(200).json(returnEntity);

    } catch (error) {

        res.status(500).send(`Error: ${error.message}`);
    }
});
router.get('/:id', async (req, res) => {

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
router.post('', async (req, res) => {

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

    try {
    let id = parseInt(req.params.id);
        let entity = req.body;

        if (entity.id && parseInt(entity.id) !== id) {
            return res.status(404).send(`no existe provincia con id (${entity.id}).`);
        }
 const rowsAffected =
            await currentService.updateAsync(entity);

        res.status(201).json(rowsAffected);
    } catch (error) {

        res.status(400).send(`Error: ${error.message}`);
    }
});

router.delete('/:id', async (req, res) => {

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