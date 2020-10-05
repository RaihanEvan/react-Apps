import React from 'react';
import {Text,View,Image} from 'react-native';

const ImageDetail = (props)=>{
    console.log(props);
    return(
        <View>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:'red',
        },
    }
);

export default ImageDetail;