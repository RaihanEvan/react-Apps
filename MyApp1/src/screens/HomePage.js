import React from 'react';
import { Text, Button, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomePage = (props) => {
    return (
        <View>
            <Text style={{
                fontSize: 20,
                color: 'black',
                textAlign: 'center', fontWeight: 'bold', fontFamily: 'sans-serif', marginTop: 10
            }}>Welcome!!</Text>
            <Text style={{
                fontSize: 15,
                color: 'blue',
                textAlign: 'center',
            }}>This is the Home page of this App!</Text>
            <Button
                title='My Profile'
                color='red'
                borderWidth='1'
                padding='25'
                borderColor='black'
                onPress={
                    function () {
                        props.navigation.navigate("ProfilePage");
                    }
                }
            />
            <TouchableOpacity>
                <Image style={styles.imgStyle} source={require('./../../assets/iut-logo.png')} />
                <Text style={styles.textStyle}>Department of CSE{"\n"}Program: SWE{"\n"}{"\n"}</Text>
            </TouchableOpacity>
            <Button
                title='Semester-wise Course List'
                color='purple'
                borderWidth='1'
                padding='25'
                borderColor='black'
                margin='10'
                onPress={
                    function () { props.navigation.navigate("SemesterPage"); }
                }
            />
            <Button title='List of Faculty Members'
                color='blue'
                borderWidth='1'
                padding='25'
                borderColor='black'
                onPress={
                    function () {
                        props.navigation.navigate("FacultyPage");
                    }
                }
            />
        </View>
    );
}
const styles = StyleSheet.create(
    {
        imgStyle: {
            height: 305,
            width: 205,
            alignSelf: 'center',
            margin:5,

        },
        textStyle: {
            fontSize: 15,
            color: 'black',
            textAlign: "center",
            margin: 10
        }
    }
);



export default HomePage;