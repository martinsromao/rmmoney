import { createContext, useEffect, useState, type ReactNode } from "react"
import { api } from "./services/api";

export const TransactionContext = createContext<Transaction[]>([])
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

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get("/transaction")
      .then(response => setTransactions(response.data.transactions));

  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  )

}