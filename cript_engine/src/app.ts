import express from 'express';
import env from "./config/env";
import {indexRouter} from "./route/index.route";
import bodyParser from "body-parser";
import {errorHandler} from "./middleware/ErrorHandler";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const port = env.PORT;
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/api/v1',indexRouter );
app.use(errorHandler.logErrorMiddleware);
app.use(errorHandler.returnError);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


