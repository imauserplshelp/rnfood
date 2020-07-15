import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      //If pass params property to 2nd arg of an axios call any key/value 
      //pairs we put insdide of here will automatically appended to 
      //request URL
      params: {
        limit: 50,
        term,
        location: 'san jose'
      }	
    });
    //Anytime we want to update some piece of state, wivh is where we're 
    //going to store these search resutls, we'll use that setter -- setResults
    setResults(response.data.businesses);
  };

  return ( 
    <View>
      <SearchBar 
      	term={term} 
      	onTermChange={setTerm} 
      	//Before onTermChange condensed, written as onTermChange={newTerm => setTerm(newTerm)
 		onTermSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
   );
};

const styles = StyleSheet.create({});

export default SearchScreen;