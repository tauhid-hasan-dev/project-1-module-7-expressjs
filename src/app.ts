import express, {NextFunction, Request, Response} from 'express';
const app = express()

// parsers
app.use(express.json())
app.use(express.text());

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method, req.hostname);
    next()
}

app.get('/', logger, (req, res) => {
    console.log(req.query.email);
    res.send('Hello this is tazani');

});

app.post("/", (req: Request, res: Response)=> {
    console.log(req.body);
    res.json({
        status: 202
    })
})

export default app;