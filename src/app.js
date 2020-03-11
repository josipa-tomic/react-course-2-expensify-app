
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibileExpences from './selectors/expenses';

const store=configureStore();
store.dispatch(addExpense({description: 'Water bill'}));
store.dispatch(addExpense({description: 'Gas bill',createdAt: 1000}));
store.dispatch(addExpense({description: 'Eletricity bill'}));
store.dispatch(addExpense({description: 'House bill'}));
store.dispatch(addExpense({description: 'Rent' , amount: 123000}));


const state=store.getState();
console.log(state);
const visibleExpenses=getVisibileExpences(state.expenses,state.filters);
console.log(visibleExpenses);


const jsx=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
//store.dispatch(setTextFilter('water'));
//console.log(getVisibileExpences(store.getState()));
ReactDOM.render(jsx, document.getElementById('app'));

