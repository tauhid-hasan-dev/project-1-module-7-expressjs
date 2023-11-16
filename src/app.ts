import express, {NextFunction, Request, Response} from 'express';
const app = express()

// parsers
app.use(express.json())
app.use(express.text());

const userRouter = express.Router();

app.use("/", userRouter);

userRouter.get('/api/v1/users/create-user-info', (req : Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'Data received successfully',
        data: user,
    })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send(something)
    } catch (error) {
        console.log(error)
        next(error)
    }
}

app.get('/', logger, (req, res) => {
    console.log(req.query.email);
    res.send('Server is running for the project...');

});

app.post("/", (req: Request, res: Response)=> {
    console.log(req.body);
    res.json({
        status: 202
    })
})

// Route error handler

app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        success : false,
        message: "Route is not found",
    })
})

// global error handler 

app.use((error: any ,req: Request, res: Response, next: NextFunction ) => {
    res.status(400).json({
        success : false,
        message: "Error is happened",
    })
})

export default app;