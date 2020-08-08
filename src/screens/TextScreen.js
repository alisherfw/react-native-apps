import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {

    const [name, setName] = useState('');

    return (
        <View>
            <Text style={styles.text}>
                What's your name?
            </Text>
            <TextInput 
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}
            />
            <Text style={styles.text}>
                Hello {name}
            </Text>
            {
                name.length < 5 ? <Text>
                    Name should be at least 5 characters
                </Text> : null
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 50,
        fontSize: 35,
        paddingLeft: 10,
        borderColor: '#42f545'
    },
    text: {
        fontSize: 30,
        marginLeft: 10,
        marginTop: 10
    }
});

export default TextScreen;