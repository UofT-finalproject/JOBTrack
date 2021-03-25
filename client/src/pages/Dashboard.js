import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import JobsList from '../components/JobsList';

function Dashboard() {

    return (
        <div>
            <Header as='h3' textAlign='center' style={{ marginTop: 10 }}>
                    <Icon name='clipboard list' color='green' />
                    Tracking Jobs List
                  </Header>
            <JobsList />
        </div>
    )
}

export default Dashboard;
