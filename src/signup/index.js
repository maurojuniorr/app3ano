import { Text, View } from 'react-native';
import estilo from './estilo';

export default function Signup() {
  return (
   <View style = {estilo.container} > 
      <View style ={estilo.logoContainer}>
          <Text>Logo Container</Text>
      </View>
      <View style = {estilo.inputContainer}>
        <Text>input Container</Text>
      </View>
      <View style = {estilo.signupContainer}>
        <Text>Signup Container</Text>
      </View> 
   </View>
  );
}
