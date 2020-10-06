import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    /* const uni_1="BUET";
     const uni_2="KUET";
     const uni_3="CUET";
     const uni_4="RUET";
     const uni_5="SUST";
     const uni_6="BAU";
     */
    const uni = [
        { name: "BUET", key: '1' },
        { name: "KUET", key: '2' },
        { name: "CUET", key: '3' },
        { name: "RUET", key: '4' },
        { name: "SUST", key: '5' },
        { name: "BAU", key: '6' },
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList>
                showsVerticalScrollIndicator = {false}
                data = {uni}
                renderItem = {function ({ item }) {
                    return (<Text style={style.textStyle}>{item.name}</Text>);
                }}
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 20,
            color: 'blue',
            marginVertical: 30,
        },
        viewStyle: {
            backgroundColor: 'red',
            borderWidth: 5,
        }
    }
);

export default ListScreen;