import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Fontisto } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    

    return (
        <View style={styles.backgroundStyle}>
            <Fontisto name="search" style={styles.iconStyle} />
            <TextInput  
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />
        </View>
    );
    }

const styles = StyleSheet.create({

    backgroundStyle: {
    marginTop: 10,
    backgroundColor: 'grey',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
    }, 
    inputStyle: {
        fontSize: 20,
        flex: 1,
    }, 
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
});

export default SearchBar;

