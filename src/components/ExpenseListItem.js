import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// load a locale
numeral.register('locale', 'hr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'tis',
        million: 'mil',
        billion: 'mlrd',
        trillion: 'tril'
    },
    ordinal : function (number) {
        return '.';
    },
    currency: {
        symbol: 'kn'
    }
});

// switch between locales
numeral.locale('hr');
const ExpenseListItem = ({ id, description, amount, createdAt})=>(
    <div>
     <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
     </Link>
     <p>
     {numeral(amount / 100).format('0,0[.]00 $')}
     -
     {moment(createdAt).format("MMMM Do, YYYY")}
     </p>
    

    </div>
);


export default ExpenseListItem;