 import { View,StyleSheet ,Alert} from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
function ExpenseForm({onCancle,onSubmit,submitButtonLabel,defaultValues}){  
   const [inputvalues,setInputvalues]=  useState({
         amount:defaultValues?defaultValues.amount.toString():'',
         date:defaultValues?getFormattedDate(defaultValues.date):'',
         description:defaultValues?defaultValues.description:''
   }); 

    function inputchangeHandeler(inputidentifier,enteredvalue){
        setInputvalues((currInputvalues)=>{
            return {
                ...currInputvalues,
                [inputidentifier]:enteredvalue
            }
        })
    } 

    function submitHandler(){
        const expenseData = {
            amount:+inputvalues.amount,
            date:new Date(inputvalues.date),
            description:inputvalues.description
        } 
        const isValid = expenseData.amount > 0 && !isNaN(expenseData.date.getTime()) && expenseData.description.trim().length > 0;
        if (!isValid) { 
            // show an alert
              Alert.alert(
                'Invalid input',
                'Please make sure you entered a valid amount, date and description.',
                [{ text: 'Okay', style: 'destructive' }]
            ); 
            return;
         
        }
        onSubmit(expenseData);
    }
  return <View> 
      <Input lable ={"Amount" } textinputconfgic={ {
         keyboardType:"decimal-pad",
         onChangeText:inputchangeHandeler.bind(this,'amount'),
         value:inputvalues.amount
      }}/>
      <Input lable ={"Date"} textinputconfgic={{
        placeholder:"YYYY-MM-DD",
        maxLength:10,
        onChangeText:inputchangeHandeler.bind(this,'date'),
        value:inputvalues.date
      }}/>
      <Input lable ={"Description"} 
      textinputconfgic={{
        multiline:true,
        autoCapitalize:'none',
        autoCorrect:false,
        onChangeText:inputchangeHandeler.bind(this,'description'),
        value:inputvalues.description
      }}/>
       <View style={styles.buttons}>
        <Button
         style={styles.button} mode="flat" onPress={onCancle}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {submitButtonLabel}
        </Button>
      </View>
  </View>

}

export default ExpenseForm; 

const styles = StyleSheet.create({
    button: {
        minWidth: 120,
        marginHorizontal: 8,
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
});