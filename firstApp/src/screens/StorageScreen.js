import React from 'react';
import React from 'react-native';
import {Text, View, Button,AsyncStorage} from 'react-native';

const StorageScreen = ()=>{
    let func=()=>{
        let i=0;
        for(i=0;i<100000000000;i++){}
        alert("Done");
    };
    func();
    return(
        <View>
            <Text>Storage Screen</Text>
            <Button title='Get Data' onPress={function(){}}/>
            <Button title='Remove Data' onPress={function(){}}/>
        </View>
    );
};

export default StorageScreen;