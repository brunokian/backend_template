import express, { Request, Response } from 'express';
import loginRoutes from './src/routes/LoginRoutes';
import connectToDatabase from './src/models/connection';

const app = express();

app.use(express.json()); // sem o express.json os corpos das requisições em formato JSON não seriam automaticamente analisados e convertidos em objetos JS pelo Express

const PORT = 8000;

app.get('/', (_req: Request, res: Response) => {
    res.status(200).send('Express + TypeScript')
});

connectToDatabase() // Faz a conexão com o DB
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });

app.use(loginRoutes) // adicionando as rotas criadas no loginRoutes