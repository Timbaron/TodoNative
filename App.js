import { StatusBar } from 'expo-status-bar';
import React,  {useState} from 'react';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from './components/header';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy Coffee', key: '1' },
    {text: 'Create an app', key:'2'},
    { text: 'Play on the switch', key: '3' }
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content} >
        {/*Form*/}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding:40,
  },
  list: {
    marginTop:20
  }
});
