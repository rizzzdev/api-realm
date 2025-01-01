import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3201;

app.get('/', (req: Request, res: Response) => {
  res.send('hello');
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
