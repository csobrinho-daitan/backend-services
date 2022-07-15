import 'dotenv/config';

import express from 'express';
import { hello } from './functions/helloWorld';

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  return res.send({
    message: hello(),
  });
});

app.listen(port, () => {
  console.log(`[server]: server is running inside Docker at https://localhost:${port}`);
});
