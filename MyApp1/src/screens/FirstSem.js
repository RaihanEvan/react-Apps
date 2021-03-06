import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const FirstSem = ()=>{
    const sem1 = [
        {name: "1. HUM 4142",key:'1'},
        {name: "2. HUM 4145",key:'2'},
        {name: "3. PHY 4143",key:'3'},
        {name: "4. MATH 4141",key:'4'},
        {name: "5. CSE 4104",key:'5'},
        {name: "6. CSE 4107",key:'6'},
    ];
    return(
        <View style={styles.viewStyles}>
            <Text style={{
                fontSize: 20,
                color: 'gray',
                textAlign: 'center', fontWeight: 'bold', fontFamily: 'sans-serif', marginTop: 10,marginBottom:20,
            }}>1st Semester</Text>
            <FlatList
                data = {sem1}
                renderItem = {function({item}){
                    return <Text style={styles.textStyles}>{item.name}</Text>;
                }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyles:{
            alignSelf:'center',
            fontSize:35,
        },
        viewStyles:{
            alignSelf:'center',
            margin:20,
        },
    }
);

export default FirstSem;;