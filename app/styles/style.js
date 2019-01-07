import { StyleSheet } from 'react-native'
import { Reducer } from 'react-native-router-flux';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
  text: {
      fontSize: 16,
      color: 'white',
  },
  title: {
      justifyContent: 'center',
      color: 'red',
      fontSize: 24,
      textAlign: 'center',
  },
  login: {
      fontSize: 18,
      marginLeft: 25,
  },
  edit: {
      borderColor: 'black',
      backgroundColor: 'blue',
      borderRadius: 30,
      borderColor: 'black',      
  },
  button: {
      alignItems: 'center',
      backgroundColor: 'steelblue',
      borderColor: 'black',
      borderRadius: 30,
      borderWidth: 1, 
      margin: 20,     
  },
  group: {
      flexDirection: 'row',
      justifyContent: 'center'      
  },
  itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
  },
  itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
  }
})

export default Style