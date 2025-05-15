import ReactDOM from 'react-dom/client';
import { App } from './App';
import React from "react";
import { createServer, Model } from "miragejs";

createServer({

  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createAt: new Date('2021-02-02 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 400,
          category: 'Casa',
          createAt: new Date('2021-02-20 18:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => { // Corrigido de /transaction
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { // Corrigido de /transaction
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,


);



