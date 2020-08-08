import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ImageDetails = ({imageSource, rating, title}) => {
    return (
        <View style={styles.viewStyle}>
            <Image source={imageSource} />
            <Text style={styles.textStyle}>
                {title}
            </Text>
            <Text style={styles.textStyle}>
                Image score - {rating}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        alignItems: "center"
    },
    textStyle: {
        fontSize: 15
    }
});

export default ImageDetails;