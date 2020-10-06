import React from 'react';
import {Text,Button,View,Image,TouchableOpacity} from 'react-native';

const HomePage = (props)=>{
    return(
        <View>
            <Text style={{fontSize:20,
            color:'black',
            textAlign:'center',fontWeight:'bold',fontFamily:'sans-serif',marginTop:30}}>Welcome!!</Text>
            <Text style={{fontSize:15,
            color:'blue',
            textAlign:'center',}}>This is the Home page of this App!</Text>
            <TouchableOpacity>
                <Button title='My Profile' color='red' borderWidth='1' padding='25' borderColor='black' onPress={
                    function(){
                        props.navigation.navigate("ProfilePage");
                    }}></Button>
                <Image source = {require('./../../assets/iut-logo.png') 
                }></Image>
            </TouchableOpacity>
            <Button title='Semester-wise Course List' color='purple' borderWidth='1' padding='25' borderColor='black' onPress={
                    function(){
                        props.navigation.navigate("SemesterPage");
                    }}></Button>
            <Button title='List of Faculty Members' color='blue' borderWidth='1' padding='25' borderColor='black' onPress={
                    function(){
                        props.navigation.navigate("FacultyPage");
                    }}></Button>
        </View>
    );
}
//const styles = StyleSheet.create();

export default HomePage;