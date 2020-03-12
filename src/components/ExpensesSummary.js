import expensesTotal from "../selectors/expenses-total"
import { connect } from "react-redux";
import numeral from 'numeral';
import React from 'react';
import selectExpenses from '../selectors/expenses';

const ExpensesSummary=({expensesCount, expensesTotal})=>{
    const expenseWord= (expensesCount)===1 ? 'expense' : 'expenses'; 
    const formattedExpensesTotal=numeral(expensesTotal/100).format('0,0[.]00 $');
    return (
    <div>
    <h3>
    Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
    </h3>
    </div>
 );
}
const mapStateToProps=(state)=>{
    const visibleExpenses=selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);