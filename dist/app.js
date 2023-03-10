"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: true }));
const routes_1 = require("./routes");
app.use('/api/v1/users', routes_1.userRouter);
app.use('/api/v1/albums', routes_1.albumRouter);
app.use('/api/v1/artists', routes_1.artistRouter);
app.use('/api/v1/songs', routes_1.songRouter);
//error handling
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});
//connecting too database and server
const PORT = process.env.PORT || 3500;
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(process.env.DATABASE_URL, () => {
    try {
        app.listen(PORT, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
        });
        console.log('Connected to Database');
    }
    catch (err) {
        console.log(err);
    }
});
