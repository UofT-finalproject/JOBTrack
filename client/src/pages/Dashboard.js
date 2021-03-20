import React from 'react';
import JobsList from '../components/JobsList';
import SideMenu from '../components/SideMenu';
import { Grid } from 'semantic-ui-react';

function Dashboard() {

    return (
        <div>
            
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <SideMenu />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobsList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}

export default Dashboard;
