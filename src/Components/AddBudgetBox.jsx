import React from 'react'
import {RiCloseFill} from 'react-icons/ri'
import { useBudget } from '../Context/budgetContext'
const AddBudgetBox = ({handelClose}) => {

    const {addBudget} = useBudget()


    function handelAddBudget(e){
        e.preventDefault()
        let name = e.target[0].value;
        let max = parseFloat(e.target[1].value)
        addBudget({
            name,
            max
        })
        handelClose()
        e.target[0].value = ''
        e.target[1].value =''
       

    }
  return (
    <div className='flex flex-col gap-6  bg-white  w-[300px] sm:w-[420px] h-[320px]' >
        <div className=' py-4 px-6 border-b border-black/[0.2]   flex justify-between'>
            <h3 className='font-sembold text-xl'>New Budget</h3>
            <RiCloseFill onClick={handelClose} className='text-xl cursor-pointer' />
        </div>

        <form onSubmit={handelAddBudget} className='flex flex-col gap-4 py-0 px-6'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input  required className='border-black/[0.3] px-3 py-2 border outline-none'  type="text" name='name' />

            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Maximum Spending</label>
                <input min={0} step={0.1} required  className='border-black/[0.3] px-3 py-2 border outline-none' type="number" name='name' />

            </div>
            
            <div className='flex justify-end mb-4'>
                <button className='bg-blue-500 px-5 py-2 text-white rounded-md'>Add</button>
            </div>
        </form>
    </div>
  )
}

export default AddBudgetBox