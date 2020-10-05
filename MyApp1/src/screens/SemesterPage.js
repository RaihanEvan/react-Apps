import React from 'react';
import {Text,View,Button,StyleSheets,FlatList} from 'react-native';

const SemesterPage = ()=>{
    return(
        <View style={styles.viewStyles}>
            <Button 
            title="1st Semester"
            onPress={
                function(){
                        props.navigation.navigate("Semester-1");
                    }}
            color='red'
            />
            <Button 
            title="2nd Semester"
            onPress={
                function(){
                        props.navigation.navigate("Semester-2");
                    }}
            color='green'
            />
            <Button 
            title="3rd Semester"
            onPress={
                function(){
                        props.navigation.navigate("Semester-3");
                    }}
            color='blue'
            />
        </View>
    );
};

const styles=StyleSheets.create(
    {
        textStyles:{

        },
        viewStyles:{

        },
    }
);

export default SemesterPage;