import express, { Router } from 'express';
import { categoryRouter } from './Category';
import { productRouter } from './Product';

export const routerApi = (app: express.Application): void => {
    const router = Router();
    app.use('/api/v1', router);
    router.use('/category', categoryRouter)
    router.use('/product', productRouter)
}