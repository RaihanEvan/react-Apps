import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

const ThirdSem = ()=>{

    const sem3 = [
        {name: "1. MATH 4341",key:'1'},
        {name: "2. CSE 4303",key:'2'},
        {name: "3. SWE 4301",key:'3'},
        {name: "4. CSE 4309",key:'4'},
        {name: "5. CSE 4305",key:'5'},
        {name: "6. CSE 4307",key:'6'},
    ];
    return(
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>Third Semester</Text>
            <FlatList>
                data={sem3}
                renderItem={function({item}){
                    return(<Text style={styles.textStyles}>{item.name}</Text>);
                }}
            </FlatList>
        </View>
    );
};

const styles=StyleSheet.create(
    {
        textStyles:{
            alignSelf:'center',
            fontSize:39,
        },
        viewStyles:{
            justifyContent:'space-around',
            alignSelf:'center',
            margin:20,
        },
    }
);

export default ThirdSem;