"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
app.use("/", userRouter);
userRouter.get('/api/v1/users/create-user-info', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'Data received successfully',
        data: user,
    });
});
const logger = (req, res, next) => {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
};
app.get('/', logger, (req, res) => {
    console.log(req.query.email);
    res.send('Server is running for the project...');
});
app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        status: 202
    });
});
// Route error handler
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// global error handler 
app.use((error, req, res, next) => {
    res.status(400).json({
        success: false,
        message: "Error is happened",
    });
});
exports.default = app;
