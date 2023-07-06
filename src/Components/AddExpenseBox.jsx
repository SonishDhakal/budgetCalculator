import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { useBudget } from "../Context/budgetContext";

const AddExpenseBox = ({ handelClose, defaultValue }) => {
  const { addExpense, budgets, addUnCategorizedExpenses } = useBudget();

  function handelAddExpense(e) {
    e.preventDefault();
    let des = e.target[0].value;
    let amount = parseFloat(e.target[1].value);
    let budgetId = e.target[2].value;

    addExpense({
      des,
      amount,
      budgetId,
    });

    handelClose();
    e.target[0].value = "";
    e.target[1].value = "";
  }
  return (
    <div className="flex flex-col gap-6  bg-white w-[300px] sm:w-[450px] h-[380px]">
      <div className=" py-4 px-6 border-b border-black/[0.2]   flex justify-between">
        <h3 className="font-sembold text-xl">New Budget</h3>
        <RiCloseFill onClick={handelClose} className="text-xl cursor-pointer" />
      </div>

      <form
        onSubmit={handelAddExpense}
        className="flex flex-col gap-4 py-0 px-6"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Description</label>
          <input required
            className="border-black/[0.3] px-3 py-2 border outline-none"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Amount</label>
          <input required
            min={0}
            step={0.1}
            className="border-black/[0.3] px-3 py-2 border outline-none"
            type="number"
            name="name"
          />
        </div>
        <div className="w-full mt-2">
          <select 
            value={defaultValue}
            className="w-full outline-none border border-black/[0.3] px-3 py-2"
          >
         
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 px-5 py-2 text-white rounded-md">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseBox;
