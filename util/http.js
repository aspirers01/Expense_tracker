 import axios from 'axios';
    const API_URL = 'https://expensemanger-6dcfb-default-rtdb.firebaseio.com/'; 

export async function storeExpense(expense) {
    const response = axios.post(`${API_URL}/expenses.json`, expense);
    const id= response.data.name;
    return id;
 }

 export  async function fetchExpenses() {
    const response = await axios.get(API_URL + '/expenses.json');

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

 export async function updateExpense(Id, expense) {
    return axios.put(`${API_URL}/expenses/${Id}.json`, expense);
  }

  export function deleteExpense(Id) {
    return axios.delete(`${API_URL}/expenses/${Id}.json`);
  }