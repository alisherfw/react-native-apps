import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetails 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')} 
                rating="7.2"
            />
            <ImageDetails 
                title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                rating="7.1"
            />
            <ImageDetails 
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                rating="8.0"
            />
        </View>
    );
}
const styles = StyleSheet.create({
    
});

export default ImageScreen;