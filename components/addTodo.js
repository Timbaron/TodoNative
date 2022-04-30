import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo({ submitHandler })
{ 
    const [text,setTest] = useState('');

    const changeHandler = (val) => {
        setTest(val);
    }
    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New Todo'
                onChangeText={changeHandler}
            /> 

            <Button onPress={() => submitHandler(text)} 
                title="Add Todo"
                color="coral"
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical:6,
        borderBottomWidth: 1,
        borderButtomColor: '#ddd'
    }
})