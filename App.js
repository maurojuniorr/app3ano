import { NavigationContainer } from '@react-navigation/native'; //essa é uma
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // essa é outra

import LoginScreen from './login/index';
import SignupScreen from './cadastro';
import HomeScreen from './home';
import ListaScreen from './lista';
import CadastroScreen from './cadastroItem';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Home' component={HomeScreen} />

				<Stack.Screen name='Login' component={LoginScreen} />

				<Stack.Screen name='Signup' component={SignupScreen} />

				<Stack.Screen name='Lista' component={ListaScreen} />

				<Stack.Screen name='CadastroScreen' component={CadastroScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
