import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { api } from "../services/api";

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData)
interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createAt: string,
}
interface TransactionProviderProps {
  children: ReactNode,

}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

interface TransactionContextData {

  transactions
  : Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>
}



export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get("/transactions") // Corrigido de /transaction
      .then(response => setTransactions(response.data.transactions));
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", { // Corrigido de /transaction
      ...transactionInput,
      createAt: new Date(),
    })
    // ...existing code...


    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }



  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )

}
// ...existing code...
export function useTransactionContext() { // Corrigido de useTransitionContext
  const context = useContext(TransactionContext)
  return context
}