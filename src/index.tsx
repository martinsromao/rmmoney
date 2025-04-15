import ReactDOM from 'react-dom/client';
import { App } from './App';
import React from "react";
import { createServer, Model } from "miragejs";

createServer({

  models: {
    transaction: Model,
  },
  routes() {


    this.namespace = 'api';
    this.get('/transaction', () => {
      return this.schema.all('transaction')
    })

    this.post('/transaction', (schema, request) => {
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



