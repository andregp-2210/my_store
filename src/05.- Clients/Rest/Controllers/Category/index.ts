import { Router, Request, Response } from 'express';
import { UnitOfWorkPostgres } from '../../../../03.- UnitOfWork/UnitOfWork.Postgres/UnitOfWorkPostgres';
import { CategoryService } from '../../../../04.- Service/CategoryService';

const router: Router = Router();
const context: UnitOfWorkPostgres = new UnitOfWorkPostgres();
const categoryService = new CategoryService(context);

router.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Success',
            data: await categoryService.getAll()
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
            data: await categoryService.get(parseInt(id, 10))
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
        const category = req.body;
        res.status(201).json({
            message: 'created',
            data: await categoryService.create(category),
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
            data: await categoryService.update({
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
            data: await categoryService.update({
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
        await categoryService.remove(parseInt(id, 10));
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

export const categoryRouter = router;