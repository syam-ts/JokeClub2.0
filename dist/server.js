"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
const passport_1 = __importDefault(require("passport"));
const cookie_session_1 = __importDefault(require("cookie-session"));
dotenv.config();
const app = (0, express_1.default)();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../view'));
app.use((0, cookie_session_1.default)({
    name: 'session',
    keys: ['randomKey'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
const authRoute = require('../src/auth');
app.use('/auth', authRoute);
app.use('/dist', express_1.default.static(path_1.default.join(__dirname, '../dist')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../')));
const myMiddleware = (req, res, next) => {
    console.log(req.cookies);
    next();
};
app.use(myMiddleware);
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
