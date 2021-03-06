import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FirstSem from'../screens/FirstSem';

const SemesterPage = (props) => {
    return (
        <View style={styles.viewStyles}>
            <View>
                <Button
                    title="1st Semester"
                    onPress={
                        function () {
                            props.navigation.navigate("First Semester");
                        }}
                    color='red'
                />
            </View>
            <View>
                <Button
                    title="2nd Semester"
                    onPress={
                        function () {
                            props.navigation.navigate("Second Semester");
                        }}
                    color='green'
                />
            </View>
            <View>
                <Button
                    title="3rd Semester"
                    onPress={
                        function () {
                            props.navigation.navigate("Third Semester");
                        }}
                    color='blue'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        viewStyles: {
            alignSelf: 'center',
            margin: 20,
        },
    }
);

export default SemesterPage;