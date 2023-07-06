import React, { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { useBudget } from '../Context/budgetContext'


const TotalCard = () => {
 const {budgets,expenses} = useBudget()
 const [expenseTotal,setExpenseTotal] = useState(0)
 const [budgetTotal,setBudgetTotal] = useState(0)
 



 useEffect(() =>{
setExpenseTotal(expenses.reduce((total,expense) => total +expense.amount ,0))
setBudgetTotal(budgets.reduce((total,expense) => total +expense.max ,0))


 },[budgets,expenses])



  return (
    <div className='flex flex-col gap-4 border-black/[0.2] border p-3'>
        <div className='flex justify-between items-end'>
            <h3 className='text-md'>Total</h3>
            <p><span className='text-black'>${expenseTotal}</span>/<span className='text-black/[0.3] text-sm'>${budgetTotal}</span></p>
        </div>
        <ProgressBar amount={expenseTotal} max={budgetTotal}/>
        
    </div>
  )
}

export default TotalCard