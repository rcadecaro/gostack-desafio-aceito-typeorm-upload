import { Router } from 'express';

// import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  // TODO
  return response.json({ todo: 'you have things to do' });
});

// POST /transactions:
// A rota deve receber title, value, type, e category dentro do corpo da requisição,
// sendo o type o tipo da transação, que deve ser income para entradas (depósitos)
// e outcome para saídas (retiradas).
// Ao cadastrar uma nova transação, ela deve ser armazenada dentro do seu banco de dados,
// possuindo os campos id, title, value, type, category_id, created_at, updated_at.
transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body;
  const createTransaction = new CreateTransactionService();
  const transaction = await createTransaction.execute({
    title,
    value,
    type,
    category_title: category,
  });

  return response.status(201).json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
  return response.json({ todo: 'you have things to do' });
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
  return response.json({ todo: 'you have things to do' });
});

export default transactionsRouter;
