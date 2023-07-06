import React, { useEffect, useState } from 'react'
import { ProgressBar } from './ProgressBar'
import { useBudget } from '../Context/budgetContext'


const BudgetCard = ({data,showExpenseBox,showExpenseDetails}) => {
 const {getBudgetExpenses,expenses} = useBudget()
const [expenseAmount,setExpenseAmount] = useState()
 useEffect(() =>{
 let expensesValue = getBudgetExpenses(data.id)

  expensesValue = expensesValue.reduce((total,expense) => total +expense.amount ,0)
  setExpenseAmount(expensesValue)
  


 },[expenses])



  return (
    <div className='flex flex-col gap-4 border-black/[0.2] border p-3'>
        <div className='flex justify-between items-end'>
            <h3 className='text-md'>{data.name}</h3>
            <p><span className='text-black'>${expenseAmount}</span>/<span className='text-black/[0.3] text-sm'>${data.max}</span></p>
        </div>
        <ProgressBar amount={expenseAmount} max={data.max}/>
        <div className='flex gap-2 justify-end'>
        <button onClick={showExpenseBox} className='rounded-md border bg-blue-500 border-transparent text-white px-4 py-1'>Add Expense</button>
          <button onClick={showExpenseDetails} className='hover:bg-blue-500 transition-all rounded-md border-2 border-blue-400 px-4 py-[0.4rem] text-blue-500 hover:text-white'>Show Expense</button>
        </div>
    </div>
  )
}

export default BudgetCard