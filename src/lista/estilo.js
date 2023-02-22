import { StyleSheet, StatusBar } from 'react-native';
export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	  },
	  item: {
		backgroundColor: '#4DAE4C',
		padding: 24,
		borderRadius: 12,
		marginVertical: 8,
		marginHorizontal: 16,
	  },
	  title: {
		fontSize: 20,
		color: 'white'
	  },
	  botao:{
		backgroundColor: 'blue'
	  }
});
