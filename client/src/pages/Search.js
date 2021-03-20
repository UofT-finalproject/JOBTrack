import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';

function Search() {
    return ( 
        <div>
            <SearchForm />
            <SearchList />
        </div>
    )
}

export default Search;