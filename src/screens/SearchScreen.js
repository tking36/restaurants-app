import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import Results from '../components/ResultsList';


const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm} 
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Results title="Cost Effective" results={filterResultsByPrice("$")}/>
                <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 5 }}/>
                <Results title="Bit Pricier" results={filterResultsByPrice("$$")}/>
                <View style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth, marginBottom: 5 }}/>
                <Results title="Big Spender" results={filterResultsByPrice("$$$")}/>
            </ScrollView>
        </>
    );
    }

const styles = StyleSheet.create({});

export default SearchScreen;