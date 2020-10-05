import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";


const ImageScreen = ()=>{
    return(
        <View>
            <ImageDetail title="Beach"/>
            <ImageDetail title="Forest"/>
            <ImageDetail title="Mountain"/>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:25,
            color:'black',
        },
    }
);

export default ImageScreen;