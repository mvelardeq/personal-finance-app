export type finanaceType = 
  {
    id:number,
    typeOperation: string,
    concept: string,
    note: string,
    price: number,
    date: number,
    deleted: boolean,
  }

export type financeStateType = {
  financeCount:number,
  finances: finanaceType[]
  totalExpenses:number,
  totalRevenue:number
}

export type actionFinanceType = {
  type:'addFinance',
  payload:finanaceType
} | {type:'removeFinance', payload:{id:number}}