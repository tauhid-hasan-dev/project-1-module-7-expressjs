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
        message: 'User is created successfully',
        data: user,
    });
});
const logger = (req, res, next) => {
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Error is happened",
        });
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
exports.default = app;
