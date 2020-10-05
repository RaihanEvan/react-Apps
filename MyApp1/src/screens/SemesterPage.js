import React from 'react';
import {Text,View,Button,StyleSheets,FlatList} from 'react-native';

const SemesterPage = ()=>{
    const firstSem = [
        {name: "1. HUM 4142",key:'1'},
        {name: "2. HUM 4145",key:'2'},
        {name: "3. PHY 4143",key:'3'},
        {name: "4. MATH 4141",key:'4'},
        {name: "5. CSE 4104",key:'5'},
        {name: "6. CSE 4107",key:'6'},
    ];
    const secondSem = [
        {name: "1. HUM 4242",key:'1'},
        {name: "2. HUM 4247",key:'2'},
        {name: "3. HUM 4249",key:'3'},
        {name: "4. MATH 4241",key:'4'},
        {name: "5. CSE 4203",key:'5'},
        {name: "6. CSE 4205",key:'6'},
    ];
    const thirdSem = [
        {name: "1. MATH 4341",key:'1'},
        {name: "2. CSE 4303",key:'2'},
        {name: "3. SWE 4301",key:'3'},
        {name: "4. CSE 4309",key:'4'},
        {name: "5. CSE 4305",key:'5'},
        {name: "6. CSE 4307",key:'6'},
    ];
    return(
        <View>
            <Text></Text>
            <FlatList>
                
            </FlatList>
            <Button 
            title="1st Semester"
            onPress={
                function()
                    {
                        props.navigation.navigate("");
                    }
            }
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