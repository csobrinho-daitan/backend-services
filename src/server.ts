import 'dotenv/config';

import express from 'express';

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  return res.send({
    message: 'Hello from Docker',
  });
});

app.listen(port, () => {
  console.log(`[server]: server is running inside Docker at https://localhost:${port}`);
});
