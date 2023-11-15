import express, {Request, Response} from 'express';
const app = express()

// parsers
app.use(express.json())
app.use(express.text())

app.get('/', (req, res) => {
  res.send('Hello this is tazani')
});

app.post("/", (req: Request, res: Response)=> {
    console.log(req.body);
    res.json({
        status: 202
    })
})

export default app;