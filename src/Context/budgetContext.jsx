import { createContext, useContext } from "react";
import useLocalStorage from "../Hooks/UseLocalStorage";
import { v4 as uuidv4 } from 'uuid';



const Context = createContext();

export function useBudget(){
    return useContext(Context)
}


export const ContextProvider = ({children}) =>{


    const [budgets,setBudgets] = useLocalStorage('budgets',[])
    const [expenses,setExpenses] = useLocalStorage('expenses',[])


    function addBudget({name,max}){
        let find = budgets.find(budget => budget.name === name)
        if(find){
            return budgets
        }
        else[
            setBudgets([...budgets,{name,max,id:uuidv4()}])
        ]

    }


    function removeBudget(budgetId){
        setBudgets(prevbudget => prevbudget.filter(budget => budget.id !== budgetId))
        setExpenses(prevbudget => prevbudget.filter(budget => budget.budgetId !== budgetId))

    }

    function addExpense({des,amount,budgetId}){
        setExpenses([...expenses,{des,amount,id:uuidv4(), budgetId}])


    }

    function deleteExpense(id){
        setExpenses(prevbudget => prevbudget.filter(budget => budget.id !== id))

    }

   

    function getBudget(budgetId){
        return budgets.filter(budget => budget.id ==budgetId)


    }


    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId ==budgetId)

    }







    return (
        <Context.Provider value={{getBudgetExpenses,budgets,expenses,addBudget,removeBudget,addExpense,deleteExpense,getBudget}}>
            {children}

        </Context.Provider>
    )
}