
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
console.log('testing');
const jsx=(
    <Provider store={store}>
    <AppRouter />
    </Provider>
);
//store.dispatch(setTextFilter('water'));
//console.log(getVisibileExpences(store.getState()));
ReactDOM.render(jsx, document.getElementById('app'));

