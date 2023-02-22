import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	container: {
		flex: 1,
	},
	input: {
		height: 50,
		margin: 12,
		borderWidth: 1,
		padding: 10,
		borderRadius: 12,
	},
	inputLabel:{
		paddingLeft:'13px',
		fontWeight:'bold',
		fontSize: 18,
		color: '#4DAE4C'

	},
	inputContainer: {
		flex: 1,
		// backgroundColor: 'yellow',
		paddingLeft: '10%',
		paddingRight: '10%',
		justifyContent: 'center',
	},
	logo: {
		flex: 1,
		marginTop: '10%',
		marginBottom: '10%',
		width: '100/%',
		resizeMode: 'contain',
	},
	buttonTextRegister: {
		color: '#4DAE4C',
		fontSize: 18,
		marginTop: "8%",
		fontWeight: 'bold',
	},
	loginButton: {
		color: '#4DAE4C',
		fontSize: 18,
		marginBottom: "10%",
		fontWeight: 'bold',
	},
	buttonCadastrar: {
		backgroundColor: '#4DAE4C',
		marginBottom: "10%",
		borderRadius: 12,
		width: '75%',
		height: '50px',
		alignItems: 'center',
		justifyContent: 'center'
	  },
	  title: {
		fontSize: 20,
		color: 'white'

	},
	buttonContainer: {
		flex: 1,
		// backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
