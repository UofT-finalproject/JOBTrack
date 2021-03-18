import React, { useContext } from 'react';
import { Container } from 'semantic-ui-react';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';


function Search() {
    

    return ( 
        <Container >
            <div>
            <SearchForm />
            <SearchList />
            </div>
            
        </Container>
    )
}

export default Search;