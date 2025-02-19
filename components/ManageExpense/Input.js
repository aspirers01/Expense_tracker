 import { View, Text, TextInput,StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

 function Input({lable,textinputconfgic}){ 
    const inputstyle = [styles.input]; 
    if( textinputconfgic && textinputconfgic.multiline){ 
        inputstyle.push(styles.inputMultiline);
    }
    return <View style={styles.inputcontainer}>
        <Text style={styles.label} > {lable}</Text> 
        <TextInput style={inputstyle} {...textinputconfgic}/>
    </View>
 }


    export default Input; 
     
    const styles = StyleSheet.create({ 
        inputcontainer:{
            marginVertical:8,
            marginHorizontal:4
        }, 
        label:{
            fontSize:18,
            marginBottom:4, 
            color:GlobalStyles.colors.primary100
        },
        input:{
           backgroundColor:GlobalStyles.colors.primary100, 
           padding:6, 
           borderRadius:4, 
           color:GlobalStyles.colors.primary700

        },
        inputMultiline:{
            minHeight:100,
            textAlignVertical:'top',

        }
    });