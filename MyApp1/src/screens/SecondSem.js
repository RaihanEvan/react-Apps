import React from 'react';
import {Text,View,Button,StyleSheets,FlatList} from 'react-native';

const SecondSem = ()=>{

    const sem2 = [
        {name: "1. HUM 4242",key:'1'},
        {name: "2. HUM 4247",key:'2'},
        {name: "3. HUM 4249",key:'3'},
        {name: "4. MATH 4241",key:'4'},
        {name: "5. CSE 4203",key:'5'},
        {name: "6. CSE 4205",key:'6'},
    ];

    return(
        <View>
            <Text></Text>
            <FlatList>
                data={sem2}
                renderItem={function({item}){
                    return(<Text style={styles.textStyles}>{item.name}</Text>);
                }}
            </FlatList>
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

export default SecondSem;