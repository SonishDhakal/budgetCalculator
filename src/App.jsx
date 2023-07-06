import React, { useEffect, useState } from 'react'
import BudgetCard from './Components/BudgetCard'
import AddBudgetBox from './Components/AddBudgetBox'
import AddExpenseBox from './Components/AddExpenseBox'
import ShowExpense from './Components/ShowExpense'
import { useBudget } from './Context/budgetContext'
import TotalCard from './Components/TotalCard'


const App = () => {

  const [showBudgetBox,setShowBudgetBox] = useState(false)
  const [showExpenseBox,setShowExpenseBox] = useState(false)
  const [box,setBox] = useState(false)
  const [ExpenseDefaultValue,setExpenseDefaultValue] = useState()
  const [budgetValue,setBudgetValue] = useState()
  const[total,showTotal] =useState(false)
  const {budgets} = useBudget()


  function handelShowExpense(budgetId){
    setShowExpenseBox(true)
    setExpenseDefaultValue(budgetId)

  }

  function showBudgetExpense(budgetId){
    setBudgetValue(budgetId)
    setBox(true)
    
  }

  useEffect(() =>{
    if(budgets.length > 0){
      showTotal(true)
    }
    else{
      showTotal(false)
    }

  },[budgets])

  
  return (
    <main className={`min-h-screen realtive ${box  && 'bg-black/[0.1]' } ${showBudgetBox  && 'bg-black/[0.1]' } ${showExpenseBox && 'bg-black/[0.1]'}`}>
      <div className={`${showBudgetBox ? 'top-10' : 'top-[-100%]'} transition-all absolute left-[50%] translate-x-[-50%]`}>
      <AddBudgetBox handelClose={() => setShowBudgetBox(false)} />
     
      </div>

      <div className={`${showExpenseBox ? 'top-10' : 'top-[-100%]'} transition-all absolute left-[50%] translate-x-[-50%]`}>
      <AddExpenseBox defaultValue = {ExpenseDefaultValue}  handelClose={() =>setShowExpenseBox(false)} />
      </div>

      <div className={`${box ? 'top-10' : 'top-[-100%]'} transition-all absolute left-[50%] translate-x-[-50%]`}>
        <ShowExpense toClose={() => setBox(false)} budgetName={budgetValue} />
      </div>

      <div className=' containerBox flex justify-between items-center'>
        <h3 className='font-bold sm:text-3xl'>Budget</h3>
        <div className='flex  gap-3'>
          <button onClick={() => setShowBudgetBox(true)} className='rounded-md border bg-blue-500 border-transparent text-white sm:px-7 sm:py-2 px-3 py-1'>Add Budget</button>
          <button  onClick={() => handelShowExpense('initial')} className='hover:bg-blue-500 transition-all rounded-md border-2 border-blue-400 sm:px-7 sm:py-2 px-3 py-1 text-blue-500 hover:text-white'>Add Expense</button>
        </div>
      </div>
      <div className='containerBox grid grid-cols-16 gap-12 '>
        {budgets.map(budget =>(
          <BudgetCard showExpenseDetails={() => showBudgetExpense(budget.id)} showExpenseBox={() => handelShowExpense(budget.id)} data={budget}  key={budget.id}/>
        ))}
        <div className={`${total ? 'block' :'hidden'}`}>
        <TotalCard  />
        </div>
        
       
      </div>
    </main>
  )
}

export default App