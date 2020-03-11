import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


const now=moment();
console.log(now.format('MMM Do YYYY'));
class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description: props.expense? props.expense.description :  '',
            note: props.expense ? props.expense.note :  '',
            amount: props.expense ? (props.expense.amount  / 100).toString() :  '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        
        };
    }
    
   onDesciptionChange=(e)=>{
       const description=e.target.value;
       this.setState(()=>({description}));
   };

   onNoteChange=(e)=>{
       const note=e.target.value;
       this.setState(()=>({note}));
   };

   onAmountChange=(e)=>{
       const amount=e.target.value;
       if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)){
        this.setState(()=>({amount}));
       }
   };

   onDateChange=(createdAt)=>{
       if(createdAt){
        this.setState(()=>({createdAt}));
   }};
   onFocusChange=({focused})=>{
       this.setState(()=>({calendarFocused: focused}));
   };
   onSubmit=(e)=>{
       e.preventDefault();
       if(!this.state.description || !this.state.amount){
          this.setState(()=>({error: 'Please provide description and amount'}));
       }else{
           this.setState(()=>({error: ''}));
           this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount,10)*100,
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
           });
       }
   }
    render(){
        return(
            <div>
               <form onSubmit={this.onSubmit}>
               {this.state.error && <p>{this.state.error}</p>}
                <input
                  type="text" 
                  placeholder="Description"
                  autoFocus
                  value={this.state.description}
                  onChange={this.onDesciptionChange}/>
                <input 
                  type="type"
                  placeholder="Amount"
                  value={this.state.amount}
                  onChange={this.onAmountChange}
                  />
                <SingleDatePicker
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  numberOfMonths={1}
                  isOutsideRange={()=> false}/>
                <textarea placeholder="Add note for your expense(optional)" onChange={this.onNoteChange} value={this.state.note}></textarea>
                <button>Add Expense</button>
                </form>
            </div>
        )
    }
}
export default ExpenseForm;