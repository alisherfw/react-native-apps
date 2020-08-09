import React from "react";
import {StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
    <View>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Component')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button 
        title="Go to the Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title="Go to password Demo"
        onPress={() => navigation.navigate('Password')}
      />
      <Button 
        title="Go to Box Demo"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 35
  }
});

export default HomeScreen;