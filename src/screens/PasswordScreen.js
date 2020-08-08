import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PasswordScreen = () => {
    
    const [password, setPassword] = useState('');
    const [securePassword, setSecureShowPassword] = useState(true);
    const [showPassword, setShowPassword] = useState('Show Password');

    const onPress = () => {
        if(securePassword === true) {
            setSecureShowPassword(false)
            setShowPassword('Hint Password')
        } else {
            setSecureShowPassword(true)
            setShowPassword('Show Password')
        }
    };

    return(
        <View>
            <Text style={styles.text}>Enter your password: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={newValue => setPassword(newValue)}
                secureTextEntry={securePassword}
            />
            <TouchableOpacity
                onPress={onPress}
            >
                <Text style={{marginLeft: 10}}>{showPassword}</Text>
            </TouchableOpacity>
            
            {
            password.length <= 5 ? <Text style={styles.warningText}>
                Password must be longer than 5 characters
            </Text> : null
            }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 5,
        fontSize: 20,
        height: 30,
        paddingLeft: 5
    },
    text: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20
    },
    warningText: {
        color: 'red',
        marginLeft: 10
    }
});

export default PasswordScreen;