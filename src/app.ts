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
        message: 'User is created successfully',
        data: user,
    })
})

const logger = (req: Request, res: Response, next: NextFunction) => {

    try {
        res.send(something)
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success : false,
            message: "Error is happened",
        })
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

export default app;