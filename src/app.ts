import express from 'express';
import * as bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
app.get('/', (req, res) => res.send('server is running!'));

app.post('/api/v1/parse', (req, res) => {
    if (req.body.data !== undefined && req.body.data !== null) {
        const resData = { firstName: 'JOHN0000', lastName: 'MICHAEL000', clientId: '9994567' }
        res.status(200).json({ statusCode: 200, data: resData })
    } else {
        res.status(404).send("Oh uh, something went wrong, request data is missing");
    }
});

app.post('/api/v2/parse', (req, res) => {
    if (req.body.data !== undefined && req.body.data !== null) {
        const resData = { firstName: 'JOHN', lastName: 'MICHAEL', clientId: '999-4567' }
        res.status(200).json({ statusCode: 200, data: resData })
    } else {
        res.status(404).send("Oh uh, something went wrong, request data is missing");
    }
});

export { app };