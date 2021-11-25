import { Router, Request, Response } from 'express';
import { UnitOfWorkPostgres } from '../../../../03.- UnitOfWork/UnitOfWork.Postgres/UnitOfWorkPostgres';
import { ProductService } from '../../../../04.- Service/ProductService';

const router: Router = Router();
const context: UnitOfWorkPostgres = new UnitOfWorkPostgres();
const productService = new ProductService(context);

router.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Success',
            data: await productService.getAll()
        })
    } catch (error) {
        res.status(400).json({
            message: error.severity || 'ERROR',
            code: error.code || '1',
            data: error.stack,
            //detail
            //where
        })
    }
});
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({
            message: 'Success',
            data: await productService.get(parseInt(id, 10))
        })
    } catch (error) {
        res.status(400).json({
            message: error.severity || 'ERROR',
            code: error.code || '1',
            data: error.stack,
            //detail
            //where
        })
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const product = req.body;
        res.status(201).json({
            message: 'created',
            data: {
                id: await productService.create(product)
            },
        });
    } catch (error) {
        res.status(400).json({
            message: error.severity || 'ERROR',
            code: error.code || '1',
            data: error.stack,
            //detail
            //where
        })
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({
            message: 'updated',
            data: await productService.update({
                id,
                ...req.body
            })
        });
    } catch (error) {
        res.status(400).json({
            message: error.severity || 'ERROR',
            code: error.code || '1',
            data: error.stack,
            //detail
            //where
        })
    }
});

router.patch('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        res.status(200).json({
            message: 'partial updated',
            data: await productService.update({
                id,
                ...req.body
            })
        });
    } catch (error) {
        res.status(400).json({
            message: error.severity || 'ERROR',
            code: error.code || '1',
            data: error.stack,
            //detail
            //where
        })
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await productService.remove(parseInt(id, 10));
        res.json({
            message: 'deleted',
            id,
        });
    } catch (error) {
        res.status(400).json({
            message: error.severity || 'ERROR',
            code: error.code || '1',
            data: error.stack,
            //detail
            //where
        })
    }
});

export const productRouter = router;