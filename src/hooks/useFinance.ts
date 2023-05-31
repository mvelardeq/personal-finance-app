import { useContext } from "react"
import { personalFinanceContext } from "../context/personalFinanceContext copy"

export const useFinance = () => {

    const {financeSate,addFinance,removeFinance} = useContext(personalFinanceContext)

    let totalExpenses=0
    financeSate.finances.forEach(finance=>{
        if(finance.typeOperation==='Gastos') {
            totalExpenses=totalExpenses+Number(finance.price)
        }
    })

    console.log(typeof totalExpenses)
    console.log(totalExpenses)

    let totalRevenue=0
    financeSate.finances.forEach(finance=>{
        if(finance.typeOperation==='Ingresos') {
            totalRevenue=totalRevenue+Number(finance.price)
        }
    })

  return {
    financeSate,
    addFinance,
    removeFinance,
    financeCount:financeSate.finances.length,
    totalExpenses,
    totalRevenue
  }
}

