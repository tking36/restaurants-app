import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation, route}) => {

    const [results, setResults] = useState(null);

    const { id } = route.params; 

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}/reviews`, {
            params: {
                limit: 10,
                
            }
        });
        
        setResults(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!results) {
        return null;
    }

    console.log(results.reviews[0].text);

    return (
        <View>
           <Text>{results.name}</Text>
              <FlatList
                data={results.reviews}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return (
                        <View style={styles.container}>
                            <Text style={styles.name}>{item.user.name}</Text>
                            <Text style={styles.reviewText}>{item.text} hi</Text>
                            <Text style={styles.reviewText}>{item.rating} stars</Text>
                            {/* <Text style={styles.name}>{item.url}</Text> */}
                            <Text style={styles.name}>{item.time_created}</Text>
                        </View>
                    )

                }}
                />
        </View>
    );
    }

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 5,
    },
    reviewText: {
        marginBottom: 5,
        marginLeft: 10,
    },
    container: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'gray',
        marginBottom: 10,
        borderRadius: 4,
    },

});

export default ResultsShowScreen;