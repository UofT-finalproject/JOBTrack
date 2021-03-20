import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import SearchForm from '../components/SearchForm';
import SearchList from '../components/SearchList';


function Search() {
    

    return ( 
        
                    
                    <Grid.Column width={13}>
                        <div>
                            <SearchForm />
                            <SearchList />
                        </div>
                    </Grid.Column>
               
            
            
            
        
    )
}

export default Search;