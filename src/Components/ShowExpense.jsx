import React, { useEffect, useState } from 'react'
import { RiCloseFill, RiDeleteBack2Fill,RiDeleteBin3Line } from 'react-icons/ri'
import { useBudget } from '../Context/budgetContext'

const ShowExpense = ({toClose,budgetName}) => {
    const {getBudget,getBudgetExpenses,removeBudget,deleteExpense,expenses,budgets} = useBudget()
    const [currentBudget,setCurrentBudget] = useState([])
    const [currentExpenses,setCurrentExpenses] = useState()

    function handelDelBudget(){
        removeBudget(currentBudget[0].id)
       toClose()
    }

    function handelDelExpenses(id){
        deleteExpense(id)
   

        
    }
    

    useEffect(() =>{
        let current = getBudget(budgetName)
        let currentExp = getBudgetExpenses(budgetName)
        setCurrentExpenses(currentExp)
        setCurrentBudget(current)
        
        
    },[budgets,expenses,budgetName])
  return (
    <div className='bg-white  w-[300px] sm:w-[400px] rounded-md min-h-[100px] flex flex-col gap-4'>
        <div className='border-b px-3 py-2 flex justify-between items-center'>
        <div className='flex  items-center gap-4'>
            <h3 className='font-semibold text-xl'>Expenses - {currentBudget[0]?.name} </h3>
            <RiDeleteBin3Line onClick={handelDelBudget} className='text-red-400 cursor-pointer ' />
        </div>
        <div>
        <RiCloseFill onClick={toClose} className='text-xl cursor-pointer' />
            
        </div>
        </div>
        <div className='flex flex-col gap-3 px-4 pb-4'>
            {currentExpenses?.map((expenses) =>(
                <div className='flex justify-between' key={expenses.id}>
                    <h4 className='text-lg'>{expenses.des}</h4>
                    <div className='flex items-center gap-4'>
                        <span className='text-green-500 text-lg'>${expenses.amount}</span>
                        <RiDeleteBack2Fill onClick={() => handelDelExpenses(expenses.id)} className='cursor-pointer text-xl text-red-400' />
                    </div>
                </div>

            ))}
        </div>
    </div>
  )
}

export default ShowExpense