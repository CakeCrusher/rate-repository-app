import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';
import {Link} from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.dark,
        flexDirection: 'row'
    },
    headerItem: {
        color: 'white',
    }
});

const AppBar = () => {
    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <ScrollView horizontal>
                    <Link to='/'>
                        <Text fontSize='subheading' padding='small' style={styles.headerItem}>Repositories</Text>
                    </Link>
                    <Link to='/signin'>
                        <Text fontSize='subheading' padding='small' style={styles.headerItem}>Sign In</Text>
                    </Link>
                    <Link to='/bmi'>
                        <Text fontSize='subheading' padding='small' style={styles.headerItem}>BMI</Text>
                    </Link>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AppBar;