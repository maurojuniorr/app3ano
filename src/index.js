import { StatusBar } from 'expo-status-bar'; //importações de componentes e biliotecas
import { StyleSheet,Text, View } from 'react-native';
import Login from './Login';
import Signup from './Signup';

export default function MeuApp() { 
    return (
        
      <View style={estilo.container}> 
          <Login/>
        
     
      </View>      
    );
  }

const estilo = StyleSheet.create({
	container:{ 
		flex:1,
		backgroundColor: '#fff'
	}
	
});