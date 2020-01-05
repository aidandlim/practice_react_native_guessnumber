import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={{...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerIOS: {
        backgroundColor: 'gray',
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;