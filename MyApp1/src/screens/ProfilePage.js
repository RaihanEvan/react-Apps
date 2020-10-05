import React from 'react';
import {Text,View,Image,StyleSheet,FlatList} from 'react-native';

const ProfilePage = ()=>{
    return(
        <View>
            <Image style={styles.dp} source={require('./../../assets/goku.png')}/>
            <Text style={styles.textStyle}>Name : H.M. Raihan Evan</Text>
            <Text style={styles.textStyle}>Student ID : 170042028</Text>
            <Text style={styles.textStyle}>Semester : 6th</Text>
            <Text style={styles.textStyle}>Email : raihanevan@iut-dhaka.edu</Text>
            
        </View>
    );
};
const styles = StyleSheet.create(
    {
        textStyle:{
            fontFamily:"",
            fontSize:10,
            color:"green",
            backgroundColor:'black',
        },
        dp:{
            height:300,
            width:400,
            resizeMode:'stretch',
        },
    }
);

export default ProfilePage;