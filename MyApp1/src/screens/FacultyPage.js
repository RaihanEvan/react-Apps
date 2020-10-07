import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const faculty_members = [
    { name: "1. Prof Dr. Muhammad Mahbub Alam", key: '1' },
    { name: "2. Mohaiminul Islam", key: '2' },
    { name: "3. Sohel Ahmed", key: '3' },
    { name: "4. Ridwan Kabir", key: '4' },
    { name: "5. Prof. Hasanul Kabir", key: '5' },
    { name: "6. Tasnim Ahmed", key: '6' },
    { name: "7. Fardin Saad", key: '7' },
    { name: "8. Sabbir Ahmed", key: '8' },
    { name: "9. Bakhtiar Hasan", key: '9' },
    { name: "10. Tajkia Rahman Toma", key: '10' },
    { name: "11. Ridwan Karim Sony", key: '11' },
    { name: "12. Njayou Youssouf", key: '12' },

];
const FacultyPage = () => {
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={faculty_members}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}>{item.name}</Text>;
                }}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        viewStyle: {
            alignSelf: 'center',
            margin: 20,

        },
        textStyle: {
            fontSize: 25,
            color: 'blue',
            marginVertical: 10,

        }
    }
);

export default FacultyPage;