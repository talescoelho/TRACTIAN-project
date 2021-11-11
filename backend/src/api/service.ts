import app from './app';

app.get('/', (req, res) => res.status(200).send('Hello World!'));
