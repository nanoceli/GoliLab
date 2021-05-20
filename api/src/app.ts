require('dotenv').config();
import * as express from "express";
import { Routes } from "./routes/index";
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();

    public mongoUrl: string = `mongodb+srv://${process.env.USER}:${process.env.PASSMONGO}@cluster0.3ydh9.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`;  
    
    constructor() {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(express.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(express.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, );
    }
}

export default new App().app;


