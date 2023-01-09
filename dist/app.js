"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use('/api/v1/users', userRoute);
//error handling
app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server!`,
    });
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
//connecting too database and server
// const PORT = process.env.PORT || 3500;
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.DATABASE_URL as string, () => { 
//   try {
//     app.listen(PORT, () => {
//       console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
//     });
//     console.log('Connected to Database');
//   }catch (err) {
//     console.log(err);
//   }
// });
