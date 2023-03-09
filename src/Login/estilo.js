import { StyleSheet } from "react-native";

export default StyleSheet.create({ //Meu conjunto de estilos
	container:{ 
		flex:1,
		// backgroundColor: 'red'
	},
	img:{
		width:'50px',
		height:'50px'
	},
	logoContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',

		// backgroundColor: 'yellow'
	},
	inputContainer: {
		flex:2,
		backgroundColor: '#d1d1d1'
	},
	signupContainer: {
		flex:1,
		// backgroundColor: 'blue'
	},
	input: {
		height: 50,
		margin: 12,
		borderWidth: 6,
		padding: 10,
		borderRadius: 25,
	}
	
});

