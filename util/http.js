 import axios from 'axios';
    const API_URL = 'https://expensemanger-6dcfb-default-rtdb.firebaseio.com/'; 

export function storeExpense(expense) {
    return axios.post(`${API_URL}/expenses.json`, expense);

 }

 export  async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json');

    const expenses = [];
  
    for (const key in response.data) {
      const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date),
        description: response.data[key].description
      };
      expenses.push(expenseObj);
    }
  
    return expenses;
        
    
 }