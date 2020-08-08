import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ExerciseScreen = () => {
    const name = "Alisher";

    return (
        <View>
            <Text style={styles.textStyle}>
                Getting started with React Native!
            </Text>
            <Text style={{fontSize: 20}}>
                My name is {name}
            </Text>
        </View> 
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ExerciseScreen;