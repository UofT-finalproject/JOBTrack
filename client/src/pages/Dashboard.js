import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import JobsList from '../components/JobsList';
import CareerServicesItem from '../components/CareerServicesItem';

function Dashboard() {

    return (
        <div>
            <Header as='h3' textAlign='center' style={{ marginTop: 10 }}>
                    <Icon name='clipboard list' color='grey'/>
                    Tracking Jobs List
                  </Header>
            <JobsList />
            <CareerServicesItem />
        </div>
    )
}

export default Dashboard;
