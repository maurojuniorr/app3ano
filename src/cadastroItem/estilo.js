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
		fontSize: 18
	},
	productImage: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// marginTop: '10%',
		// marginBottom: '10%',
		// width: '100/%',
		// resizeMode: 'contain',
	},
	buttonCadastrar: {
		backgroundColor: '#4DAE4C',
		borderRadius: 12,
		width: '75%',
		height: '50px',
		alignItems: 'center',
		justifyContent: 'center'
	  },
	inputContainer: {
		// flex: 1,
		// backgroundColor: 'yellow',
		paddingLeft: '10%',
		paddingRight: '10%',
		justifyContent: 'center',
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
