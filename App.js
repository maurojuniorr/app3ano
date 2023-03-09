import {View, StyleSheet } from 'react-native';
import MeuApp from './src';

export default function App() {
  return (
	
    
	<View style={estilo.container}>  
		<MeuApp/>
    </View> 
	
  );
}

const estilo = StyleSheet.create({ //Meu conjunto de estilos
	container:{ 
		flex:1,
	}
});