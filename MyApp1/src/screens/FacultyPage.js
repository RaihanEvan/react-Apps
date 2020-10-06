import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const FacultyPage = () => {
    const faculty_members = [
        { name: "1. Mohaiminul Islam", key: '1' },
        { name: "2. Sohel Ahmed", key: '2' },
        { name: "3. Ridwan Kabir", key: '3' },
        { name: "4. Prof. Hasanul Kabir", key: '4' },
        { name: "5. Tasnim Ahmed", key: '5' },
    ];
    return (
        <View style={styles.viewStyle}>
            <FlatList>
                showVerticalScrollIndicator = {false}
                data = {faculty_members}
                renderItem = {function ({ item }) {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
            </FlatList>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        viewStyle: {
            alignSelf:'center',
            margin: 20,
            
        },
        textStyle: {
            fontSize: 15,
            color: 'green',
            marginVertical: 30,

        }
    }
);

export default FacultyPage;