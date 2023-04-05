import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './login';
import SignupScreen from './signup';
import FeedScreen from './feed';
import CadastroScreen from './cadastro';
import DetalhesScreen from './detalhes';
import SearchScreen from './procurar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs({ navigation }) {
	return (
		<Tab.Navigator initialRouteName='Feed'>
			<Tab.Screen name='Procurar' component={SearchScreen} />
			<Tab.Screen name='Feed' component={FeedScreen} />
			<Tab.Screen name='Cadastro' component={RegisterScreen} />
		</Tab.Navigator>
	);
}

export default function MeuApp() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={LoginScreen} />
				<Stack.Screen name='Signup' component={SignupScreen} />
				<Stack.Screen name='Home' component={Tabs} />
				<Stack.Screen name='Detalhes' component={DetalhesScreen} />
				<Stack.Screen name='Procurar' component={SearchScreen} />
				<Stack.Screen name='Cadastro' component={CadastroScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
