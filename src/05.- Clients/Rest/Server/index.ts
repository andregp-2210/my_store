import express from 'express';
import { routerApi } from '../Controllers'

export class Server {
    port: string | number;
    app: express.Application;
    routes: void;
    whiteList: string[];
    constructor() {
      this.port = process.env.PORT || 3030;
      this.app = express();
      this.useJson();
      this.routes = routerApi(this.app);
      this.whiteList = ['http://localhost:3031', 'https://protected-retreat-46657.herokuapp.com/']
      //this.useMiddlewares();
    }
    listen(): void {
      this.app.listen(this.port, () => {
        console.log(`Corriendo en puerto: ${this.port}`);
      });
    }
    useJson(): void {
      this.app.use(express.json());
    }
    // useMiddlewares(): void {
    //   this.app.use(helmet());
    //   this.app.use(cors(this.options));
    //   this.app.use(errorLoger);
    //   this.app.use(boomErrorHandler);
    //   this.app.use(errorHandler);
    // }
    // options(): void {
    //   origin: (origin: string, callback: any) => {
    //     if (this.whiteList.includes(origin) || !origin) {
    //       callback(null, true);
    //     } else {
    //       callback(new Error('No autorizado.'));
    //     }
    //   }
    // }
  }