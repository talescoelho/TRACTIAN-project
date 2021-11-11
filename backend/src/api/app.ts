import express from "express";
import users from "./routes/users";
import { load } from 'ts-dotenv';
 
const env = load({
  PORT: Number,
});

const app = express();

app.use(express.json());

app.use('/', users);

const port: number = env.PORT || 4000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;
