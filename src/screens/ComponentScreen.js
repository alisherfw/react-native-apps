import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {

    const greeting = <Text>What's up lads?</Text>;

    return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
        <Text style={styles.textStyle}>
            React Native App
        </Text>
            {greeting}
    </View>);
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentScreen;