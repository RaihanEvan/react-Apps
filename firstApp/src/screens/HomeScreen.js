import React from 'react';
import {Text,StyleSheet, Button, View,Image,TouchableOpacity} from 'react-native';

const HomeScreen = (props)=>{
    console.log(props);
    return(
        <View>
            <Text style={styles.textStyle}>Hi There! Its Home Screen</Text>
        <Button title='Go to List Screen' 
        onPress={
            function(){
               // console.log("Button Pressed");
                props.navigation.navigate("List");
        }}></Button>
        <TouchableOpacity onPress={function(){
            console.log("Image Pressed");
        }}>
            <Image source = {{
                height : 300,
                width : 200,
                uri:"https://picsum.photos/200/300"}}></Image>
        </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:"blue",
        },
    }
);
export default HomeScreen;