import { NavigationContainer } from '@react-navigation/native'; //essa é uma
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // essa é outra

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './login/index';
import SignupScreen from './cadastro';
import HomeScreen from './home';
import ListaScreen from './lista';
import CadastroScreen from './cadastroItem';
import DetalhesScreen from './detalhes';
import ProcurarScreen from './procurar';
import PDFScreen from './PDF';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function Home() {
	return (
		<Tab.Navigator>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Lista' component={ListaScreen} />
			<Tab.Screen name='Cadastro' component={CadastroScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen
					name='Login'
					component={LoginScreen}
					options={{ headerShown: false }}
					s
				/>

				<Stack.Screen
					name='Signup'
					component={SignupScreen}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name='Detalhes' component={DetalhesScreen} />
				<Stack.Screen name='Procurar' component={ProcurarScreen} />
				<Stack.Screen name='PDF' component={PDFScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
