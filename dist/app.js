"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const app = express_1.default();
exports.app = app;
app.use(bodyParser.json({
    limit: '50mb',
    verify(req, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
app.get('/', (req, res) => res.send('server is running!'));
app.post('/api/v1/parse', (req, res) => {
    if (req.body.data !== undefined && req.body.data !== null) {
        const resData = { firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId: '9994567' };
        res.status(200).json({ statusCode: 200, data: resData });
    }
    else {
        res.status(404).send("Oh uh, something went wrong, request data is missing");
    }
});
app.post('/api/v2/parse', (req, res) => {
    if (req.body.data !== undefined && req.body.data !== null) {
        const resData = { firstName: 'JOHN', lastName: 'MICHAEL', clientId: '999-4567' };
        res.status(200).json({ statusCode: 200, data: resData });
    }
    else {
        res.status(404).send("Oh uh, something went wrong, request data is missing");
    }
});
//# sourceMappingURL=app.js.map